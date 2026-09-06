import { test, expect } from '@playwright/test';

test('Common Popup overlay', async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay.html");

    await page.locator('#PopUp').click()

    const popupBox=  page.locator('.popup-overlay')
    await expect(popupBox).toBeVisible()


    await expect(page.getByRole('heading',{name:"Be always in touch"})).toBeVisible()

    await popupBox.getByRole('button',{name:"Yes"}).click()
    await expect(popupBox).toBeHidden()


})