import asyncio
import json

from playwright.async_api import Playwright, async_playwright

search_keyword = "Software Engineer"
search_location = "New York"
pagination_limit = 2
data = []


def save_data():
    """
    Saving the globaly stored data as json
    """
    with open("google_career_data.json", "w") as outfile:
        json.dump(data, outfile, indent=4)


def clean_data(data: str or list) -> str:
    """
    This function will do basic string cleaning. If the input is string
    It will clean the data and return the cleaned data. If it is list,
    It will iterate through each elements clean and join them with a pipe.

    Args:
        data (str or list): The input can be string or list

    Returns:
        str: cleaned string
    """
    if isinstance(data, str):
        data = " ".join(data.split()).strip()
        return data

    data = [" ".join(i.split()).strip() for i in data]
    data = " | ".join(data)
    return data


async def extract_data(page, job_element) -> None:
    """This function is to extract data from the product details page
    Args:
        page (playwright page object)
        job_element (Playwright locator object)
    """

    # Initializing necessary xpaths
    xpath_title = "//h2[@class='p1N2lc']"
    xpath_min_qualification = "//h3[text()='Minimum qualifications:']/following-sibling::ul[1]/li"
    xpath_prefered_qualification = "//h3[text()='Preferred qualifications:']/following-sibling::ul[1]/li"
    xpath_about_this_job = "//div[@class='aG5W3']/p"
    xpath_responsibilities = '//div[@class="BDNOWe"]/ul/li'
    xpath_job_url = "../../a"

    # Extracting necessary datas
    title = await page.locator(xpath_title).inner_text()
    min_qualification = await page.locator(xpath_min_qualification).all_inner_texts()
    preferred_qualifications = await page.locator(xpath_prefered_qualification).all_inner_texts()
    about_this_job = await page.locator(xpath_about_this_job).all_inner_texts()
    responsibilities = await page.locator(xpath_responsibilities).all_inner_texts()
    job_url = await job_element.locator(xpath_job_url).get_attribute("href")

    # Cleaning
    title = clean_data(title)
    min_qualification = clean_data(min_qualification)
    preferred_qualifications = clean_data(preferred_qualifications)
    about_this_job = clean_data(about_this_job)
    responsibilities = clean_data(responsibilities)
    job_url = clean_data(job_url)
    job_url = f"https://www.google.com/about/careers/applications{job_url}"

    data_to_save = {
        "title": title,
        "min_qualification": min_qualification,
        "preferred_qualifications": preferred_qualifications,
        "about_this_job": about_this_job,
        "responsibilities": responsibilities,
        "job_url": job_url,
    }
    # Appending to a list to save
    data.append(data_to_save)


async def parse_listing_page(page, current_page: int) -> None:
    """This function will go through each jobs listed and click it
    and pass the page object to extract_data function to extract the data.
    This function also handles pagination

    Args:
        page (playwright page object)
        current_page (int): current page number
    """
    xpath_learn_more = "//span[text()='Learn more']/following-sibling::a"
    xpath_jobs = "//li[@class='zE6MFb']//h3"
    xpath_title = "//h2[@class='p1N2lc']"
    xpath_next_page = "//div[@class='bsEDOd']//i[text()='chevron_right']"

    if current_page == 1:
        # Clicking Learn more button (For the first page only)
        learn_more_buttons = page.locator(xpath_learn_more)
        first_learn_more_buttons = learn_more_buttons.nth(0)
        await first_learn_more_buttons.click()

    # Locating all listed jobs
    await page.wait_for_selector(xpath_jobs)
    jobs = page.locator(xpath_jobs)
    jobs_count = await jobs.count()

    # Iterating through each jobs
    for i in range(jobs_count):
        # Clicking each job
        job_element = jobs.nth(i)
        await job_element.click()
        await extract_data(page, job_element)
        await page.wait_for_selector(xpath_title)

    # Pagination
    next_page = page.locator(xpath_next_page)
    if await next_page.count() > 0 and current_page < pagination_limit:
        await next_page.click()
        await page.wait_for_selector('//h3[@class="Ki3IFe"]')
        await page.wait_for_timeout(2000)
        current_page += 1
        await parse_listing_page(page, current_page=current_page)


async def run(playwright: Playwright) -> None:
    """This is the main function to initialize the playwright browser
    and create a page. Then do the initial navigations.
    Args:
        playwright (Playwright)
    """

    # Initializing browser and opening a new page
    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context()
    page = await context.new_page()

    # Navigating to homepage and clicking the "jobs" icon
    await page.goto("https://careers.google.com/", wait_until="domcontentloaded")
    await page.get_by_role("link", name="Jobs results page").click()

    # Typing the job name and clicking enter
    job_search_box = page.locator("//input[@id='c3']")
    await job_search_box.click()
    await job_search_box.type(search_keyword)
    await job_search_box.press("Enter")

    # Clicking the location searchbox icon
    await page.locator("//h3[text()='Locations']").click()
    location_filter_box = page.locator('//input[@aria-label="Which location(s) do you prefer working out of?"]')
    await location_filter_box.click()
    await location_filter_box.type(search_location, delay=200)
    await location_filter_box.press("Enter")
    await page.wait_for_load_state()
    await page.wait_for_timeout(2000)

    await parse_listing_page(page, current_page=1)
    save_data()

    await context.close()
    await browser.close()


async def main() -> None:
    async with async_playwright() as playwright:
        await run(playwright)


asyncio.run(main())
