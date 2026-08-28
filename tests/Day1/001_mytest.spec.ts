import {test,expect} from "@playwright/test";

/*

test("Title",async({page})=>{

//step1
//step 2
//step 3..
})


*/

test("Verify Title",async({page})=>{

   await page.goto("https://demowebshop.tricentis.com/")
   await expect(page).toHaveTitle("Demo Web Shop")
})

