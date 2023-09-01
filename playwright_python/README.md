# Google Careers Scraper using Playwright Python

Step 1: Clone/download the repo to your local system.

Step 2: cd into the playwright_python directory.

Step 3: Install the requirements.txt using

     pip install -r requirements.txt

Step 4: Install the necessary browsers required for playwright

    playwright install

Step 5: Run the scraper code using

     python main.py




<br>

>:bulb: ***To collect jobs listing data from Google Careers on scale and without code visit [Google Careers Scraper](https://www.scrapehero.com/marketplace/google-careers-scraper/). by [Scrapehero Cloud](https://www.scrapehero.com/marketplace/)***

<br>

>:memo: ***More resources on scraping and other related topics can be found [here](https://www.scrapehero.com/articles/).***

The results will be stored into a google_career_data.json in your project directory. Using the **filter as Michigan City,IN,USA in Google Careers**, we get the sample data shown below.


```json
{
    "address": [
        {
            "address_lines": [
                "United States"
            ],
            "city": null,
            "country": null,
            "country_code": "US",
            "display": "United States",
            "is_remote": true,
            "lat": 37.09024,
            "lon": -95.712891,
            "post_code": ""
        }
    ],
    "application_instruction": null,
    "apply_url": "https://www.google.com/about/careers/applications/signin?jobId=CiUAL2FckRqwN0DnIxnODviD9KsDrjo-DUzuCDwC_8qPXwkFURs5EjsAS-UddMJ1isRNJZ50WwQdI8LGV5aD2iKK8CkJfG0Azd0MvGD7GnlWznXYWw8lOP_6nNOmlabfG-OYPg%3D%3D_V2&jobTitle=Managed+Defense+Consultant&loc=US",
    "company_name": "Google",
    "date_published": "2023-08-25",
    "description": "In this role, you will coordinate with the Mandiant Global Security Operations Centers around the world. Our team covers Managed Defense service delivery in the Western United States, Canada, and Latin America. Managed Defense works relentlessly protect our customers from impactful cyber attacks.The US base salary range for this full-time position is $102,000-$151,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process.Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google.",
    "job_id": "jobs/116604829104513734",
    "job_responsibilities": "Trusted advisor for the customer on all security program-related activities. Lead client and engagement teams in successful delivery of our Managed Defense solutions, exchange threat intelligence with customers and internal teams, and briefing existing customers, potential customers, and external groups on security threats and incident response. Lead security incident response and leverage product knowledge to guide customers. Articulate complex information on security threats and incident response to internal and external groups across varied levels of technical understanding. Lead efforts in expanding and improving the development of processes, methodologies, and client communication methods for advanced persistent threat detection, threat intelligence, incident response, and vulnerability analysis.",
    "job_title": "Managed Defense Consultant",
    "job_url": "https://www.google.com/about/careers/applications/jobs/results/116604829104513734-managed-defense-consultant?target_level=MID&location=Michigan+City,+IN,+USA&page=1",
    "listing_url": "https://www.google.com/about/careers/applications/jobs/results/?target_level=MID&location=Michigan%20City%2C%20IN%2C%20USA&page=1",
    "locations_count": 1,
    "qualifications": "Minimum qualifications: 2 years of experience with key security program functions including cyber defense operations, incident response, security architecture (e.g., network and endpoint security), identity and access management, vulnerability management, or cyber risk management. 1 year of experience working with executives in a client-facing, consulting role. Preferred qualifications: 5 years of experience architecting, deploying, and operating mid-to-large scale enterprise end-point computing or endpoint security solutions.",
    "rank": 6,
    "time_published": "11:30:43",
    "total_job_count": ""
},
{
    "address": [
        {
            "address_lines": [
                "Google Venice, 340 Main St, Venice, CA 90291, USA"
            ],
            "city": "Los Angeles",
            "country": "CA",
            "country_code": "US",
            "display": "California, USA",
            "is_remote": true,
            "lat": 33.9954817,
            "lon": -118.4764054,
            "post_code": "90291"
        },
        {
            "address_lines": [
                "United States"
            ],
            "city": null,
            "country": null,
            "country_code": "US",
            "display": "United States",
            "is_remote": true,
            "lat": 37.09024,
            "lon": -95.712891,
            "post_code": ""
        }
    ],
    "application_instruction": null,
    "apply_url": "https://www.google.com/about/careers/applications/signin?jobId=CiUAL2FckXgBbSrmOC2tagEK_4qg550Mt9F6MmEW6WlsaKV76EVbEjsAS-UddC9BoHuYlGAZYSZjzdshWRIhEYw5qIkbtClrFOGOZ4NxGm_PZfD1Au3uTZdl0OfMkvAcuVj9jg%3D%3D_V2&jobTitle=Cyber+Defense+Automation+Engineer&loc=US",
    "company_name": "Google",
    "date_published": "2023-08-23",
    "description": "As a Cyber Defense Automation Engineer, you will be responsible for enabling the technology and tools required to effectively automate and orchestrate daily tasks within a Cyber Defense Center (CDC). You will collaborate with multiple cross-functional teams like Mandiant Architects, Mandiant Analysts, Client Information Technology (IT) resources, and other business resource owners, to define requirements and deliver recommendations focused on technologies, processes, scripting, and improvements required to support automation tasks within a CDCMandiant is a recognized leader in dynamic cyber defense, threat intelligence and incident response services. By scaling decades of frontline experience, Mandiant helps organizations to be confident in their readiness to defend against and respond to cyber threats. Mandiant is now part of Google CloudThe US base salary range for this full-time position is $103,000-$151,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring processPlease note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google",
    "job_id": "jobs/82077134966661830",
    "job_responsibilities": "Identify challenges in customer Cyber Defense Centers and formulate strategies for improvement, identify candidates for automation, plan implementation of improvements, and execute/oversee plans to completion Advise on technologies relied upon by the client CDC, CSIRT, and SOC Provide expertise for SOAR and other SOC technologies that assist in incident response Create and modify SOAR playbooks written in Python Engage and collaborate with client stakeholders and other groups within the customer environment to drive resolution for security issues",
    "job_title": "Cyber Defense Automation Engineer, Mandiant, Google Cloud",
    "job_url": "https://www.google.com/about/careers/applications/jobs/results/82077134966661830-cyber-defense-automation-engineer-mandiant-google-cloud?target_level=MID&location=Michigan+City,+IN,+USA&page=1",
    "listing_url": "https://www.google.com/about/careers/applications/jobs/results/?target_level=MID&location=Michigan%20City%2C%20IN%2C%20USA&page=1",
    "locations_count": 2,
    "qualifications": "Minimum qualifications: 3 years of experience configuring and maintaining SOAR Technologies as part of Security Engineering, System Administration, or a similarly related role 3 years of experience with networking, including TCP/IP and network topology 1 year of experience working with SOC/CSIRT or other incident response related teams 2 years of experience scripting Preferred qualifications: One or more of the following certifications or similar: CompTIA Security+, CompTIA Network+; CISCO (CCNA); ISC2 (CISSP); SANS (GSEC, GCIH, GCED, GCFA, GCIA, GNFA, GPEN)Experience managing and maintaining SOAR platforms with strong understanding of SOAR and its dependencies, as well as working with/integrating APIs into automation playbooksExperience with commercial SIEM technologies such as Chronicle, Splunk, Helix, Devo, and SentinelWorking knowledge of scripting languages, especially PythonFundamental understanding of security controls for common platforms and devices, including Windows, Linux and network equipmentStrong understanding of the incident response, containment, and remediation process",
    "rank": 7,
    "time_published": "10:00:39",
    "total_job_count": ""
},
{
    "address": [
        {
            "address_lines": [
                "Google Building Parkview, 601 N 34th St, Seattle, WA 98103, USA"
            ],
            "city": "Seattle",
            "country": "WA",
            "country_code": "US",
            "display": "Seattle, WA, USA",
            "is_remote": false,
            "lat": 47.6492973,
            "lon": -122.3505347,
            "post_code": "98103"
        },
        {
            "address_lines": [
                "San Francisco, CA, USA"
            ],
            "city": "San Francisco",
            "country": "CA",
            "country_code": "US",
            "display": "San Francisco, CA, USA",
            "is_remote": false,
            "lat": 37.7749295,
            "lon": -122.4194155,
            "post_code": ""
        },
        {
            "address_lines": [
                "Sunnyvale, CA, USA"
            ],
            "city": "Sunnyvale",
            "country": "CA",
            "country_code": "US",
            "display": "Sunnyvale, CA, USA",
            "is_remote": false,
            "lat": 37.36883,
            "lon": -122.0363496,
            "post_code": ""
        },
        {
            "address_lines": [
                "California, USA"
            ],
            "city": null,
            "country": "CA",
            "country_code": "US",
            "display": "California, USA",
            "is_remote": true,
            "lat": 36.778261,
            "lon": -119.4179324,
            "post_code": ""
        },
        {
            "address_lines": [
                "United States"
            ],
            "city": null,
            "country": null,
            "country_code": "US",
            "display": "United States",
            "is_remote": true,
            "lat": 37.09024,
            "lon": -95.712891,
            "post_code": ""
        }
    ],
    "application_instruction": null,
    "apply_url": "https://www.google.com/about/careers/applications/signin?jobId=CiUAL2FckQbT15mKb5yokwvcmKyeDw9MIAR3SCVezpYNVUmt5oLoEjsAS-UddLGyt4yZyGqOPWpS3apzkFe3ZtgPv5fNP7n_hDiB9mnEGJGQt69wuTwVs0KJ3Al-MmEYkjl95A%3D%3D_V2&jobTitle=Product+Manager+II&loc=US",
    "company_name": "Google",
    "date_published": "2023-08-28",
    "description": "At Google, we put our users first. The world is always changing, so we need Product Managers who are continuously adapting and excited to work on products that affect millions of people every day. In this role, you will work cross-functionally to guide products from conception to launch by connecting the technical and business worlds. You can break down complex problems into steps that drive product development.One of the many reasons Google consistently brings innovative, world-changing products to market is because of the collaborative work we do in Product Management. Our team works closely with creative engineers, designers, marketers, etc. to help design and develop technologies that improve access to the world's information. We're responsible for guiding products throughout the execution cycle, focusing specifically on analyzing, positioning, packaging, promoting, and tailoring our solutions to our users. Google Cloud helps employees and organizations empower their employees, serve their customers, and build what’s next for their business.As a Google Cloud Product Manager, you will drive product strategy and partner closely with cross-functional teams to define and deliver on the next phase of cloud services. Additionally, you will develop product solutions, Mergers and Acquisitions, go-to-market, and business relationships to execute on the market potential and benefits possible from applying Google’s technologies in the enterprise market.In this role, you'll be considered for all teams working on Enterprise, including Google Cloud Platform, Google Workspace, Unified Fulfillment Optimization, Google Cloud Systems, Google Cloud Security, Business Application Platform, Google Cloud AI/ML, Developer Product Group, and Internal Tools.Google Cloud accelerates organizations’ ability to digitally transform their business with the best infrastructure, platform, industry solutions and expertise. We deliver enterprise-grade solutions that leverage Google’s cutting-edge technology – all on the cleanest cloud in the industry. Customers in more than 200 countries and territories turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems.The US base salary range for this full-time position is $139,000-$208,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process.Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google.",
    "job_id": "jobs/120190257065796294",
    "job_responsibilities": "Understand the cloud ecosystem markets, competition, and user requirements in-depth. Launch new products and features, test their performance, and iterate quickly. Work collaboratively with Engineering, Marketing, Legal, UX, and other teams on cutting-edge technologies. Develop solutions to problems by collaborating as needed across regions, product areas, and functions.",
    "job_title": "Product Manager II, Generative AI, Google Cloud",
    "job_url": "https://www.google.com/about/careers/applications/jobs/results/120190257065796294-product-manager-ii-generative-ai-google-cloud?target_level=MID&location=Michigan+City,+IN,+USA&page=1",
    "listing_url": "https://www.google.com/about/careers/applications/jobs/results/?target_level=MID&location=Michigan%20City%2C%20IN%2C%20USA&page=1",
    "locations_count": 5,
    "qualifications": "Minimum qualifications: Bachelor's degree or equivalent practical experience. 4 years of experience in product manager, co-founder or a related technical role. 2 years of experience building and shipping technical products. Experience developing/launching products/technologies within one or more of the following: Cloud, SaaS, enterprise, internal tools, or supply chain networks. Preferred qualifications: Experience in one or more of the following: cloud infrastructure, SaaS, big data, security and privacy, development and operations, or artificial intelligence/machine learning. Experience with the domain/area of AI and Machine Learning. Experience managing day-to-day technical and design direction. Knowledge of multiple functional areas such as Product Management, Engineering, UX/UI, Sales, Customer Support, Finance or Marketing. Ability to influence multiple stakeholders without direct authority.",
    "rank": 12,
    "time_published": "16:01:19",
    "total_job_count": ""
},
{
    "address": [
        {
            "address_lines": [
                "Google Building TC3, 805 11th Ave, Sunnyvale, CA 94089, USA"
            ],
            "city": "Sunnyvale",
            "country": "CA",
            "country_code": "US",
            "display": "Sunnyvale, CA, USA",
            "is_remote": false,
            "lat": 37.4030338,
            "lon": -122.0325786,
            "post_code": "94089"
        },
        {
            "address_lines": [
                "Atlanta, GA, USA"
            ],
            "city": "Atlanta",
            "country": "GA",
            "country_code": "US",
            "display": "Atlanta, GA, USA",
            "is_remote": false,
            "lat": 33.748752,
            "lon": -84.38768449999999,
            "post_code": ""
        },
        {
            "address_lines": [
                "Austin, TX, USA"
            ],
            "city": "Austin",
            "country": "TX",
            "country_code": "US",
            "display": "Austin, TX, USA",
            "is_remote": false,
            "lat": 30.267153,
            "lon": -97.7430608,
            "post_code": ""
        },
        {
            "address_lines": [
                "Miami, FL, USA"
            ],
            "city": "Miami",
            "country": "FL",
            "country_code": "US",
            "display": "Miami, FL, USA",
            "is_remote": false,
            "lat": 25.7616798,
            "lon": -80.1917902,
            "post_code": ""
        },
        {
            "address_lines": [
                "Mountain View, CA, USA"
            ],
            "city": "Mountain View",
            "country": "CA",
            "country_code": "US",
            "display": "Mountain View, CA, USA",
            "is_remote": false,
            "lat": 37.3860517,
            "lon": -122.0838511,
            "post_code": ""
        },
        {
            "address_lines": [
                "New York, NY, USA"
            ],
            "city": "New York",
            "country": "NY",
            "country_code": "US",
            "display": "New York, NY, USA",
            "is_remote": false,
            "lat": 40.7127753,
            "lon": -74.0059728,
            "post_code": ""
        },
        {
            "address_lines": [
                "Los Angeles, CA, USA"
            ],
            "city": "Los Angeles",
            "country": "CA",
            "country_code": "US",
            "display": "Los Angeles, CA, USA",
            "is_remote": false,
            "lat": 34.0522342,
            "lon": -118.2436849,
            "post_code": ""
        },
        {
            "address_lines": [
                "Raleigh, NC, USA"
            ],
            "city": "Raleigh",
            "country": "NC",
            "country_code": "US",
            "display": "Raleigh, NC, USA",
            "is_remote": false,
            "lat": 35.7795897,
            "lon": -78.6381787,
            "post_code": ""
        },
        {
            "address_lines": [
                "Durham, NC, USA"
            ],
            "city": "Durham",
            "country": "NC",
            "country_code": "US",
            "display": "Durham, NC, USA",
            "is_remote": false,
            "lat": 35.9940329,
            "lon": -78.898619,
            "post_code": ""
        },
        {
            "address_lines": [
                "Reston, VA, USA"
            ],
            "city": "Reston",
            "country": "VA",
            "country_code": "US",
            "display": "Reston, VA, USA",
            "is_remote": false,
            "lat": 38.9586307,
            "lon": -77.35700279999999,
            "post_code": ""
        },
        {
            "address_lines": [
                "Seattle, WA, USA"
            ],
            "city": "Seattle",
            "country": "WA",
            "country_code": "US",
            "display": "Seattle, WA, USA",
            "is_remote": false,
            "lat": 47.6062095,
            "lon": -122.3320708,
            "post_code": ""
        },
        {
            "address_lines": [
                "San Francisco, CA, USA"
            ],
            "city": "San Francisco",
            "country": "CA",
            "country_code": "US",
            "display": "San Francisco, CA, USA",
            "is_remote": false,
            "lat": 37.7749295,
            "lon": -122.4194155,
            "post_code": ""
        },
        {
            "address_lines": [
                "United States"
            ],
            "city": null,
            "country": null,
            "country_code": "US",
            "display": "United States",
            "is_remote": true,
            "lat": 37.09024,
            "lon": -95.712891,
            "post_code": ""
        }
    ],
    "application_instruction": "This role may also be located in our Playa Vista, CA campus.",
    "apply_url": "https://www.google.com/about/careers/applications/signin?jobId=CiUAL2FckcN7BdDyC2Nl4PHek7GZ5hEOFbWhE1LT0rl5I7WYL0VaEjsAS-UddEF0apF48plBopVDHYXbRL4wo3xr4mgL9ShP6r2HXq58COUiODX73-dN1TIMrJh17RM7uV3vOA%3D%3D_V2&jobTitle=Business+Development+Manager&loc=US",
    "company_name": "Google",
    "date_published": "2023-08-14",
    "description": "The Google Maps Automotive team is at the forefront of innovations that drive new applications powered by Maps and Location technologies. We work closely with our customers and partners to introduce industry vertical solutions to power new user experiences and business models. In this role, you will work closely with product and marketing groups to bring new products and solutions to market while strengthening Google’s relationships and partnerships with automotive customers.Google Cloud accelerates organizations’ ability to digitally transform their business with the best infrastructure, platform, industry solutions and expertise. We deliver enterprise-grade solutions that leverage Google’s cutting-edge technology – all on the cleanest cloud in the industry. Customers in more than 200 countries and territories turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems.Additional Information:The US base salary range for this full-time position is $126,000-$188,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process.Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google.",
    "job_id": "jobs/143406231948534470",
    "job_responsibilities": "Be responsible for the Automotive Business development for some of the strategic automotive customers in North America. Establish relationships with these key customers through strong relationship building sales processes. Manage existing business including a network of customer executives. Contribute to the growth and direction of Google Automotive solutions. Lead the management of complex and strategic accounts, sales, partnerships, agreement negotiations and internal cross functional teams. Lead technical discussions with customers to design their next generation infotainment systems and connected services. Structure, lead, negotiate and execute all aspects of agreement/projects with internal as well as external executive level managers. Oversees all mechanics including executive review and other cross-functional review processes.",
    "job_title": "Business Development Manager, Automotive, Google Maps Platform",
    "job_url": "https://www.google.com/about/careers/applications/jobs/results/143406231948534470-business-development-manager-automotive-google-maps-platform?target_level=MID&location=Michigan+City,+IN,+USA&page=1",
    "listing_url": "https://www.google.com/about/careers/applications/jobs/results/?target_level=MID&location=Michigan%20City%2C%20IN%2C%20USA&page=1",
    "locations_count": 13,
    "qualifications": "Minimum qualifications: Bachelor's degree or equivalent practical experience. 10 years of experience in business development, consultative sales, partnerships, agreement structures, and working with Product/Engineering teams in the Automotive industry. 8 years of experience promoting automotive connected services and infotainment space or connected services for the motorcycle industry. Preferred qualifications: MBA or Advanced degree in Technology. Experience building strategic partnerships, structuring and advising on complex agreement structures. Knowledge of Maps APIs, location platforms, and the geospatial marketplace. Ability to launch a new product within an established tech company or startup. Ability to develop long-term strategic relationships with key accounts, connecting/influencing decisions at the Chief Experience Officer (CXO) level across large corporations. Excellent cross-functional project management, communication, and stakeholder management skills.",
    "rank": 17,
    "time_published": "14:30:53",
    "total_job_count": ""
},
{
    "address": [
        {
            "address_lines": [
                "South Carolina, USA"
            ],
            "city": null,
            "country": "SC",
            "country_code": "US",
            "display": "South Carolina, USA",
            "is_remote": true,
            "lat": 33.836081,
            "lon": -81.1637245,
            "post_code": ""
        },
        {
            "address_lines": [
                "United States"
            ],
            "city": null,
            "country": null,
            "country_code": "US",
            "display": "United States",
            "is_remote": true,
            "lat": 37.09024,
            "lon": -95.712891,
            "post_code": ""
        }
    ],
    "application_instruction": null,
    "apply_url": "https://www.google.com/about/careers/applications/signin?jobId=CiUAL2FckcwcWaxvbt4COX0v9nek3VcD8UKPPUiZaHcM2Ii7HhZZEjsAS-UddK8zyjb7V2aIX2Ct0WWZkNnCLEuLAa0GwGoqVZjQ0YMdKW6qgrwRgUzzbQ6QuU1oHwPUz3tyHg%3D%3D_V2&jobTitle=Senior+Consulting+Operations+Analyst&loc=US",
    "company_name": "Google",
    "date_published": "2023-08-14",
    "description": "As a Senior Consulting Operations Analyst, you will contribute and support an operations team that maintains operational excellence and provides key metrics for Mandiant’s consulting practice.Mandiant is a recognized leader in dynamic cyber defense, threat intelligence and incident response services. By scaling decades of frontline experience, Mandiant helps organizations to be confident in their readiness to defend against and respond to cyber threats. Mandiant is now part of Google Cloud.The US base salary range for this full-time position is $102,000-$150,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process.Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google.",
    "job_id": "jobs/95873828883702470",
    "job_responsibilities": "Support inquiries into project related activities, access and usage of Mandiant’s systems utilized by the consultants. Assist with the activities necessary to ensure that system activation/deactivation, accurate tracking and reporting will occur for new hires and employee terminations. Assist with governance related activities that help the consulting organization become more efficient and profitable. Identify process or system improvements, work with management and other teams to implement recommended changes. Assist in the creation of reports for sales, chargeability, utilization, key performance statistics, and other related reporting deliverables for consulting meetings, corporate-wide presentations and requests from other groups that support the Consulting organization.",
    "job_title": "Senior Consulting Operations Analyst",
    "job_url": "https://www.google.com/about/careers/applications/jobs/results/95873828883702470-senior-consulting-operations-analyst?target_level=MID&location=Michigan+City,+IN,+USA&page=1",
    "listing_url": "https://www.google.com/about/careers/applications/jobs/results/?target_level=MID&location=Michigan%20City%2C%20IN%2C%20USA&page=1",
    "locations_count": 2,
    "qualifications": "Minimum qualifications: 3 years of experience in an operations role with a professional services firm, software, or technology-based company. 3 years of experience with Professional Services Automation (PSA) systems. 3 years of experience with Enterprise Resource Planning (ERP) systems. 3 years of experience with executive level reporting, KPIs and data analytics. Preferred qualifications: Experience in project management. Experience handling confidential information and discretion with sensitive materials. Ability to work across cultures and time zones. Detail-oriented, ability to multitask, prioritize and execute multiple concurrent activities. Strong people management, customer/user service and communication skills. Strong analytical, organizational, and planning skills.",
    "rank": 10,
    "time_published": "14:30:46",
    "total_job_count": ""
}
```

