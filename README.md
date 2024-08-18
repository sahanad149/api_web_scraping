# api_web_scraping
Web Scraping API for AI Agents

This is a full-stack application that not only scrapes data from user-provided URLs but also analyzes and categorizes the data using a lightweight AI model. Add a CI/CD pipeline to automate deployment, with logging and monitoring for real-time performance tracking.

This project aligns with Olostep's goal of programmatically accessing and interacting with the Web at scale, with added AI integration for data analysis, which is crucial for AI Agents.



### STEPS:
Install the latest versions of node and npm.
Install the MongoDB and start it manually on your device.
    Check for the installation documentation on the MongoDB website for specific commands for installation and starting the server.
Initialize a new Node.js project. Creates a package.json file.
    npm init -y
Install all the necessary packages:
    npm install express mongoose puppeteer
    npm install @tensorflow/tfjs
Create folders for better organization:
    models - for mongoDB schemas
    routes - for defining api routes
    controllers - for handling the logic behind routes
    index.js - entry point of the application
Install additional middlewares:
    npm install cors morgan dotenv
        cors - allows cross-origin requests
        morgan - HTTP request logger for debugging
Install Puppeteer. It is a Node.js library that provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It’s ideal for web scraping tasks.
    npm install puppeteer

Postman output for /scrape:
{
    "url": "https://example.com",
    "data": {
        "title": "Example Domain",
        "content": "Example Domain\n\nThis domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.\n\nMore information..."
    },
    "category": "Uncategorized",
    "_id": "66c18e4e4c450bc30188de27",
    "scrapedAt": "2024-08-18T06:01:50.296Z",
    "__v": 0
}

The output on postman explained:
    url: The URL that was provided for scraping.
    data:
    title: The title of the page, which is "Example Domain" in this case.
    content: The text content extracted from the page’s body.
    category: A placeholder category, "Uncategorized", which you can later update or classify using your AI model.
    _id: The unique identifier for the document in MongoDB, automatically generated.
    scrapedAt: The timestamp indicating when the data was scraped, showing "2024-08-18T06:01:50.296Z" in ISO 8601 format.
    __v: The version key used by Mongoose to handle document revisions.