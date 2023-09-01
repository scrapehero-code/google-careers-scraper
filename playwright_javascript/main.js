const { chromium } = require('playwright');

const searchKeyword = "Software Engineer";
const searchLocation = "New York";
const paginationLimit = 2;
let data = [];

/**
 * Saves the globally stored data as JSON.
 */
function saveData() {
    const fs = require('fs');
    fs.writeFileSync("google_career_data.json", JSON.stringify(data, null, 4));
}

/**
 * Basic string cleaning function. If the input is a string,
 * it will clean the data and return the cleaned data. If it is a list,
 * it will iterate through each element, clean it, and join them with a pipe.
 * @param {string | string[]} data - The input can be a string or a list
 * @returns {string} - Cleaned string
 */
function cleanData(data) {
    if (typeof data === "string") {
        return data.replace(/\s+/g, " ").trim();
    }

    return data.map((item) => item.replace(/\s+/g, " ").trim()).join(" | ");
}

/**
 * Extracts data from the product details page
 * @param {Page} page - playwright page object
 * @param {ElementHandle} jobElement - Playwright locator object
 */
async function extractData(page, jobElement) {
    // Initializing necessary xpaths
    const xpathTitle = "//h2[@class='p1N2lc']";
    const xpathMinQualification = "//h3[text()='Minimum qualifications:']/following-sibling::ul[1]/li";
    const xpathPreferredQualification = "//h3[text()='Preferred qualifications:']/following-sibling::ul[1]/li";
    const xpathAboutThisJob = "//div[@class='aG5W3']/p";
    const xpathResponsibilities = '//div[@class="BDNOWe"]/ul/li';
    const xpathJobUrl = "../../a";

    // Extracting necessary data
    const title = await page.locator(xpathTitle).innerText();
    const minQualification = await page.locator(xpathMinQualification).allInnerTexts();
    const preferredQualifications = await page.locator(xpathPreferredQualification).allInnerTexts();
    const aboutThisJob = await page.locator(xpathAboutThisJob).allInnerTexts();
    const responsibilities = await page.locator(xpathResponsibilities).allInnerTexts();
    const jobUrl = await jobElement.locator(xpathJobUrl).getAttribute("href");

    // Cleaning data
    const cleanedTitle = cleanData(title);
    const cleanedMinQualification = cleanData(minQualification);
    const cleanedPreferredQualifications = cleanData(preferredQualifications);
    const cleanedAboutThisJob = cleanData(aboutThisJob);
    const cleanedResponsibilities = cleanData(responsibilities);
    const cleanedJobUrl = `https://www.google.com/about/careers/applications${cleanData(jobUrl)}`;

    const dataToSave = {
        title: cleanedTitle,
        minQualification: cleanedMinQualification,
        preferredQualifications: cleanedPreferredQualifications,
        aboutThisJob: cleanedAboutThisJob,
        responsibilities: cleanedResponsibilities,
        jobUrl: cleanedJobUrl,
    };
    // Appending to a list to save
    data.push(dataToSave);
}

/**
 * Parses each job listing page, clicks on each job, and extracts data from the details page.
 * Also handles pagination.
 * @param {Page} page - playwright page object
 * @param {number} currentPage - current page number
 */
async function parseListingPage(page, currentPage) {
    // Initializing necessary xpaths
    const xpathLearnMore = "//span[text()='Learn more']/following-sibling::a";
    const xpathJobs = "//li[@class='zE6MFb']//h3";
    const xpathTitle = "//h2[@class='p1N2lc']";
    const xpathNextPage = "//div[@class='bsEDOd']//i[text()='chevron_right']";

    if (currentPage === 1) {
        // Clicking Learn more button (For the first page only)
        const learnMoreButtons = await page.locator(xpathLearnMore);
        const firstLearnMoreButton = learnMoreButtons.nth(0);
        await firstLearnMoreButton.click();
    }

    // Locating all listed jobs
    await page.waitForSelector(xpathJobs);
    const jobs = await page.locator(xpathJobs);
    const jobsCount = await jobs.count();

    // Iterating through each job
    for (let i = 0; i < jobsCount; i++) {
        // Clicking each job
        const jobElement = jobs.nth(i);
        await jobElement.click();
        await extractData(page, jobElement);
        await page.waitForSelector(xpathTitle);
    }

    // Pagination
    const nextPage = await page.locator(xpathNextPage);
    if (await nextPage.count() > 0 && currentPage < paginationLimit) {
        await nextPage.click();
        await page.waitForSelector('//h3[@class="Ki3IFe"]');
        await page.waitForTimeout(2000);
        currentPage += 1;
        await parseListingPage(page, currentPage);
    }
}

/**
 * Main function to initialize the playwright browser,
 * create a page, and do the initial navigations.
 */
async function run() {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigating to homepage and clicking the "jobs" icon
    await page.goto("https://careers.google.com/", { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: "Jobs results page" }).click();

    // Typing the job name and clicking enter
    const jobSearchBox = page.locator("//input[@id='c3']");
    await jobSearchBox.click();
    await jobSearchBox.type(searchKeyword);
    await jobSearchBox.press("Enter");

    // Clicking the location search box icon
    await page.locator("//h3[text()='Locations']").click();
    const locationFilterBox = page.locator('//input[@aria-label="Which location(s) do you prefer working out of?"]');
    await locationFilterBox.click();
    await locationFilterBox.type(searchLocation, { delay: 200 });
    await locationFilterBox.press("Enter");
    await page.waitForLoadState();
    await page.waitForTimeout(2000);

    await parseListingPage(page, 1);
    saveData();

    await context.close();
    await browser.close();
}

/**
 * Main async function to run the script.
 */
run()
