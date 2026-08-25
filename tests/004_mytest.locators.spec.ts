import {test,expect} from '@playwright/test'

test('Playwright locators', async ({page})=>
{
await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app.html")
//await page.goto("http://127.0.0.1:5500/apps/pw-locators-demo-app.html")

   
  
  // 1) getByRole() - Find by semantic role and accessible name
    /* Role locators include buttons, checkboxes, headings, links, lists, tables, 
     and many more and follow W3C specifications for ARIA role.
     Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
    */

    const projectslink= page.getByRole('link',{name:'Projects'})
    await expect(projectslink).toBeVisible()

     const signInButton=page.getByRole('button',{name:'Sign in'})
     await expect(signInButton).toBeVisible()
     await signInButton.click()

     // 2) getByText() - Match visible text content on the page
  // Use this locator to find non-interactive elements like div, span, p, etc. 
  // For interactive elements like button, a, input, etc. use role locators.


  
})