import {test,expect} from '@playwright/test'

const pageUrl = 'https://sdetqa.vercel.app/autoplay';

test.describe('Data Entry Form Validation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl);
    await expect(page.getByText('AutoPlay')).toBeVisible();
  });


  test('1. Page load validation', async ({ page }) => {
      // 1. Open the URL and verify the page loaded

     await expect(page).toHaveURL(pageUrl)

     // 2. Verify the AutoPlay heading is visible
     await expect(page.getByText('AutoPlay')).toBeVisible();

  })

  test('input fields validation', async ({page}) =>{

    const nameField=page.getByPlaceholder('John Doe')
    const emailField=page.getByPlaceholder('john@example.com')
    const phoneField=page.getByPlaceholder('+1 234 567 890')
    const addressField=page.getByLabel('Address')

    // Full name field should be visible and enabled
    await expect(nameField).toBeVisible()
    await expect(nameField).toBeEnabled()

    await expect(nameField).toHaveAttribute('maxlength','15')

    // Enter and verify full name value
    await nameField.fill('John Canedy')
    await expect(nameField).toHaveValue('John Canedy')

    // Email field should be visible and accept a value
    await expect(emailField).toBeVisible()
    await emailField.fill('tester@example.com')
    await expect(emailField).toHaveValue('tester@example.com')

    // Phone field should be visible and accept a value
    await expect(phoneField).toBeVisible()
    await phoneField.fill('+1 234 567 890')
    await expect(phoneField).toHaveValue('+1 234 567 890')

    // Address field should be visible and accept multi-line text

    await expect(addressField).toBeVisible()
    await addressField.fill('123 Xyz Lane\n Delhi, India')
    await expect(addressField).toHaveValue('123 Xyz Lane\n Delhi, India')

    //await page.waitForTimeout(3000) // Wait for 3 seconds to observe the filled values
  })

   test('3. Radio button validation', async ({ page }) => {
    const maleRadio = page.getByLabel('Male', { exact: true });
    const femaleRadio = page.getByLabel('Female', { exact: true });


    // Locate both radio buttons
    await expect(maleRadio).toBeVisible()
    await expect(femaleRadio).toBeVisible()

    // Select Female and verify
    await femaleRadio.check();
    await expect(femaleRadio).toBeChecked();
    await expect(maleRadio).not.toBeChecked();
   })
});
