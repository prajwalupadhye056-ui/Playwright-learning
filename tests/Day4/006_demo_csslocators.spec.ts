/*
CSS (Cascading Style Sheets) 
===========================================

A web page is built using:
  HTML (Structure)
  CSS (Styling)
  JavaScript (Behavior)

Types of CSS Locators
-------------------------------------------
1) Absolute CSS Locator  (Not commonly used)
2) Relative CSS Locator  (Most commonly used)


Absolute CSS (Never prefer):
html > body > div:nth-of-type(4) > div > div > div:nth-of-type(3) > form > input[id="small
-searchterms"]


Common CSS Selector Patterns
-------------------------------------------

tag with id
   tag#id    OR    #id

tag with class
   tag.class   OR   .class

tag with attribute
   tag[attribute=value]   OR   [attribute=value]

tag with class + attribute
   tag.class[attribute=value]   OR   .class[attribute=value]

In Playwright Syntax:
page.locator("css_selector")

Some more Advanced CSS:
---------
Contains    *
Starts-with ^
Ends with  $
Child Selector (parent > child)
Descendant Selector (parent child)


----------------------------------------------
*/

import {test,expect} from '@playwright/test'

// The describe block groups all login tests together
test.describe('CSS Locators', () => {

    const URL = "https://demowebshop.tricentis.com/"

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })
   
test('1.CSS with ID',async({page})=>

{
   //await page.goto(URL);

      // tag with id    or   id
      //const searchbox_with_id= page.locator("input#small-searchterms")
      const searchbox_with_id = page.locator("#small-searchterms").fill("14.1-inch Laptop")
            await page.locator('[value="Search"]').click() // clicking on Search button  
            // used 'Tag'
            await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
            //await page.close()
             })

             test('2.CSS with Class', async ({ page }) => {
                     //await page.goto(URL);
             
                     const searchbox_with_class = page.locator(".search-box-text").fill("14.1-inch Laptop")
                     await page.locator('[value="Search"]').click() // clicking on Search button  
                     // used  'Tag'
                     //await page.waitForTimeout(5000);
                     await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
                     //await page.close()
                 })

test('3.CSS with Attribute', async ({ page }) => {
        //await page.goto(URL);

        // single attribute :   [name="q"]  
        // multiple attributes:   //[name="q"][value="Search store"]

        const searchbox_with_attr = page.locator('[value="Search store"]').fill("14.1-inch Laptop")
        await page.locator('[value="Search"]').click() // clicking on Search button  used 
        // 'Tag'
        //await page.waitForTimeout(5000);
        await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
        //await page.close()
    })

    test('4.CSS with Class+Attribute', async ({ page }) => {
            //await page.goto(URL);
    
            const searchbox = page.locator('.search-box-text[name="q"]').fill("14.1-inch Laptop")
            await page.locator('[value="Search"]').click() // clicking on Search button 
            //  used 'Tag'
            //await page.waitForTimeout(5000);
            await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")

    })
    // ================
       //Advanced:
       // ==================
   
       // [attribute*='partial']  -> Selects elements where attribute contains a partial value.
   
       test('5.Contians usig "*" ', async ({ page }) => {
           //await page.goto(URL);
   
           const searchbox = page.locator('[id*="searchterms"]').fill("14.1-inch Laptop")  
           // partial match

         await page.locator('[value="Search"]').click() // clicking on Search button  used 'Tag'
         await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
       })
   
   
       //  [attribute^='start']  -> Selects elements where attribute starts with a value. 
       test('6.Starts With usig ^', async ({ page }) => {
           //await page.goto(URL);
   
           const searchbox = page.locator('[id^="small"]').fill("14.1-inch Laptop")  
           //id value startign with 'small'
     
   
           await page.locator('[value="Search"]').click() // clicking on Search button  used 'Tag'
           await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
       })
   
   
       //  [attribute$='end']   -> Selects elements where attribute ends with a value.
   
       test('7.Ends With usig $', async ({ page }) => {
           //await page.goto(URL);
   
           const searchbox = page.locator('[id$="terms"]').fill("14.1-inch Laptop")  
           //id value ends with 'terms'
          
   
           await page.locator('[value="Search"]').click() // clicking on Search button  used 'Tag'
           await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
       })
   
   
       //Child Selector (parent > child)
       // Element is a direct child
   
       test('8.Child selector using > ', async ({ page }) => {
           //await page.goto(URL);
   
           const searchbox = page.locator('form>input').nth(0).fill("14.1-inch Laptop") 
           //Returns 2 elements (search box & button), need to select 1st  one
         
   
           await page.locator('[value="Search"]').click() // clicking on Search button  used 'Tag'
           await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
       })
   
   
       //Descendant Selector (parent child)
       //Element can be anywhere inside parent
   
       test('9.Descendant Selector using SPACE ', async ({ page }) => {
           //await page.goto(URL);
   
           const searchbox = page.locator('form input').nth(0).fill("14.1-inch Laptop")  
           //Returns 2 elements (search box & button), need to select 1st  one
   
   
           await page.locator('[value="Search"]').click() // clicking on Search button  used 'Tag'
           await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")
       })
   
   
   });
   