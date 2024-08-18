const puppeteer = require('puppeteer');

exports.scrapeData = async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).send('URL is required');

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        // Wait for the input element to be available
        await page.waitForSelector('input[name="search"]');

        const content = await page.evaluate(async () => {
            const inputElement = document.querySelector('input[name="search"]');
            if (inputElement) {
                inputElement.value = 'OpenAI';
                const buttonElement = document.querySelector('button[type="submit"]');
                if (buttonElement) {
                    buttonElement.click();
                }
            } else {
                console.error('Input element not found');
            }
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds for results to load
            return document.body.innerHTML;
        });

        await browser.close();

        res.json({ content });
    } catch (error) {
        res.status(500).send(error.message);
    }
};