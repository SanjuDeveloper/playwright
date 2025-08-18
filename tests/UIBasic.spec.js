const {test, expect} = require("@playwright/test");

test("Browser Fixture Test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    await console.log("Page title is: " + title);
    await expect(title).toBe("Google");
});

test.only("Page Fixture Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    await console.log("Page title is: " + title);
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("learninggg");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    expect(await page.locator("[style*='block']")).toContainText("Incorrect username/password");
});