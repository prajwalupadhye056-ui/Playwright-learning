import { test, expect } from '@playwright/test';


const pageUrl = 'https://sdetqa.vercel.app/autoplay.html';


test.describe('Data Entry Form Validation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl);
   
  })

  //1. Page Load Validation

  test('1. Page Load Validation', async ({ page }) => {
    // 1. Open the URL and verify the page loaded
    await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")

    // 2. Verify the AutoPlay heading is visible
    await expect(page.getByText('AutoPlay')).toBeVisible();
  })

  test('Checkboxes validation', async ({ page }) => {

      const sundayCheckbox = page.getByLabel('Sun');
      // check checkbox
      await sundayCheckbox.check() 

      await page.waitForTimeout(5000)

      //Select all checkboxes (Mon–Sun)
      const allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      // How to Select and validate multiple checkboxes 

      for(const day of allDays)
        {
        const checkbox=page.getByLabel(day)
        await checkbox.check()
        await expect(checkbox).toBeChecked()
       }

      
        //count of checkboxes
   
    const checkboxButton= page.locator("//input[@type='checkbox']")
    const checkboxCount=await checkboxButton.count()
    console.log("Count of checkboxes:",checkboxCount)

    //  How to Select and Validate multiple checkbox button
    // for(let i=0;i<checkboxCount;i++)
    // {
    //   await checkboxButton.nth(i).check()
    //   await expect(checkboxButton.nth(i)).toBeChecked()
      
    // }



  })

})