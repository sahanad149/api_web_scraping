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