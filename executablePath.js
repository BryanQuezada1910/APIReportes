const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const executablePath = browser._process.spawnfile;
        await browser.close();
        console.log('Chromium executable path:', executablePath);
    } catch (error) {
        console.error('Error launching Puppeteer:', error);
    }
})();
