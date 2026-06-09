import { chromium, test } from "@playwright/test";
test("To launch browser", async () => {
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome"});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.pause();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    
}); 

/*import { test } from "@playwright/test";

// Playwright passes the 'page' fixture automatically
test("To launch browser the Playwright way", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    // Pause here if you want to interact with it during headful mode
    await page.pause(); 
});   */