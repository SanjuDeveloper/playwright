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

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
   // promiss tb use krte h jb hme multiple Asynchromously run krne hote h
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").valueInput());
 
 })