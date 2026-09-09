import {test,expect} from '@playwright/test'

const pageUrl = 'https://sdetqa.vercel.app/autoplay';

test.describe('Data Entry Form Validation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl);
    await expect(page.getByText('AutoPlay')).toBeVisible();
  })
  
   test('1. Page load validation', async ({ page }) => {
        // 1. Open the URL and verify the page loaded
  
       await expect(page).toHaveURL(pageUrl)
  
       // 2. Verify the AutoPlay heading is visible
       await expect(page.getByText('AutoPlay')).toBeVisible();
  
    })
  
    test('3. Radio button validation', async ({ page }) => {
       

      const radiobuttonM= page.locator('#male')
      const radiobuttonF=page.locator('#female')

      await expect(radiobuttonM).toBeVisible()
      await expect(radiobuttonF).toBeVisible()

      await radiobuttonM.check()
      await expect(radiobuttonM).toBeChecked()
      await expect(radiobuttonF).not.toBeChecked()

      
   //count of radiobuttons
    const radioButton= page.locator("//input[@type='radio']")
    const countRadioButton=await radioButton.count()
    console.log("Count of radioButton:",countRadioButton)
     
    //Validate multiple radio button
    for(let i=0;i<countRadioButton;i++)
    {
      await radioButton.nth(i).check()
      await expect(radioButton.nth(i)).toBeChecked()
      await page.waitForTimeout(5000)
    }

    })









  });
