//Playwright Test Annotation

import { test,expect } from '@playwright/test';

test('Browser Context Playwright test',async ({ page })=>
{
await page.goto("https://rahulshettyacademy.com/client");
await page.locator('#userEmail').fill("prajwal.upadhye056@gmail.com");
await page.locator('#userPassword').fill("Indiaisgr8@123");

await page.locator("#login").click();

// await page.getByRole('button', { name: 'Login' }).click();

//Techniques to wait dynamically for new page 
await page.locator(".card-body b").first().waitFor();

//await page.waitForLoadState('networkidle')
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);


})

