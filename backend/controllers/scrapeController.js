const puppeteer = require('puppeteer');
const { categorizeText } = require('../utils/categorizeText');

exports.scrapeData = async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).send('URL is required');

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const content = await page.evaluate(async () => {
            document.querySelector('input[name="search"]').value = 'OpenAI';
            document.querySelector('button[type="submit"]').click();
            await new Promise(resolve => setTimeout(resolve, 2000));
            return document.body.innerHTML;
        });

        await browser.close();

        const categories = categorizeText(content);

        res.json({ content, categories });
    } catch (error) {
        res.status(500).send(error.message);
    }
};