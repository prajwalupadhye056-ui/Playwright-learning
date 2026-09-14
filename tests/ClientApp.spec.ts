//Playwright Test Annotation

import { test,expect } from '@playwright/test';

test('Client App Login',async ({ page })=>
{
const email = "prajwal.upadhye056@gmail.com";
const productName='ZARA COAT 3'
const products=page.locator(".card-body")
await page.goto("https://rahulshettyacademy.com/client");
await page.locator('#userEmail').fill(email);
await page.locator('#userPassword').fill("Indiaisgr8@123");

await page.locator("#login").click();

// await page.getByRole('button', { name: 'Login' }).click();

//Techniques to wait dynamically for new page 

await page.waitForLoadState('networkidle')
await page.locator(".card-body b").first().waitFor();

const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);

//Step 1 : Sign in or login in to application
//Step 2:  Add th Cart 
//Step 3 :Items in the cart will be displayed
//Step 4: Checkout
//Step 5 : Placed Order
//Step 6 :Verify THANK YOU FOR THE ORDER is displayed on confirmation page and capture order ID
//Step 7 :Orders History Page 

//Zara Coat 3
const count=await products.count()

for(let i=0;i<count;i++)
{
    //chaining of locators
  if(await  products.nth(i).locator("b").textContent() ===productName)
  {
    //add to cart
    await  products.nth(i).locator("text= Add To Cart").click()
     break;
  }
}
await page.locator("[routerlink*='cart']").click()
await page.locator("div li").first().waitFor()
const bool = await page.locator('h3', { hasText: 'ZARA COAT 3' }).isVisible()
expect(bool).toBeTruthy()

await page.locator("text=Checkout").click()

await page.locator("[placeholder*='Country']").pressSequentially("ind")
const dropdown=page.locator(".ta-results")
await dropdown.waitFor()
const optionsCount= await dropdown.locator("button").count()

for(let i=0;i<optionsCount;i++)
{
 const text = await dropdown.locator("button").nth(i).textContent()
 console.log(text)

 if(text=== " India")
 {
    await dropdown.locator("button").nth(i).click()
    break

 }
}
await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent())?.trim() ?? "";
console.log(orderId);

await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = page.locator("tbody tr");

for (let i = 0; i < await rows.count(); i++) 
    {

      const rowOrderId = (await rows.nth(i).locator("th").textContent())?.trim() ?? "";

      if (orderId.includes(rowOrderId)) 
        {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = (await page.locator(".col-text").textContent())?.trim() ?? "";
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
   await page.pause();

})

