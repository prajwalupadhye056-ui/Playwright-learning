//Playwright Test Annotation

import { test, expect } from '@playwright/test';

test('Browser Context Playwright test',async ({ browser })=>
{

const context= await browser.newContext();
const page= await context.newPage();

const userName = page.locator("#username")
const signIn= page.locator("#signInBtn")

const cardTitles=page.locator(".card-body a")

await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await page.title())
//css
await userName.fill("rahulshetty")
await page.locator("[type='password']").fill('Learning@830$3mK2')
await signIn.click()

//using regular expression

//Extracting the text from the browser
console.log(await page.locator("[style*='block']").textContent())

//Inserting valid expect assertions 
await expect(page.locator("[style*='block']")).toContainText('Incorrect')

await userName.fill("")
await userName.fill("rahulshettyacademy")
await signIn.click()

// Extract multiple web elements in page
console.log(await cardTitles.first().textContent())
console.log(await cardTitles.nth(1).textContent())

//list of web elements are returned
const allTitles=await cardTitles.allTextContents()
console.log(allTitles)

});


test.only('UI Controls test',async ({ page })=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

const userName1 = page.locator('#username')
const signIn1= page.locator("#signInBtn")

const dropdown=page.locator("select.form-control")
await dropdown.selectOption("consult")

//Radio Buttons
 await page.locator(".radiotextsty").last().click()
 await page.locator("#okayBtn").click()
 await page.pause()

})