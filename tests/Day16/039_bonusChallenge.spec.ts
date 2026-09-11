import { test, expect } from '@playwright/test';

async function moveSlider(slider, priceRange, targetPrice, position, key) {

    let count = 0;

    for (let i = 0; i < 500; i++) {

        // Get current price
        const currentValue = await priceRange.inputValue();

        // Get minimum or maximum price
        let currentPrice;

        if (position === 'min') 
            {
            currentPrice = currentValue.split(' - ')[0];
        }
         else 
            {
            currentPrice = currentValue.split(' - ')[1];
            }

        // Stop when target price is reached
        if (currentPrice === targetPrice) 
            {
            break;
           }

        await slider.press(key);

        count++;

        console.log('Current Price:', await priceRange.inputValue());
    }

    console.log('Total key presses:', count);
}


test('Set price range', async ({ page }) => {

    await page.goto('https://sdetqa.vercel.app/autoplay');

    // Target prices
    const minTarget = '$100';
    const maxTarget = '$300';

    // Sliders
    const minSlider = page.locator('#slider-range span').first();
    const maxSlider = page.locator('#slider-range span').last();

    // Price textbox
    const priceRange = page.locator('#amount');


    // Reset minimum slider to $0
    await minSlider.focus();
    await page.keyboard.press('Home');

    // Reset maximum slider to $500
    await maxSlider.focus();
    await page.keyboard.press('End');


    // Move minimum slider to $100
    await moveSlider(
        minSlider,
        priceRange,
        minTarget,
        'min',
        'ArrowRight'
    );

    // Move maximum slider to $300
    await moveSlider(
        maxSlider,
        priceRange,
        maxTarget,
        'max',
        'ArrowLeft'
    );
    // Verify
    await expect(priceRange).toHaveValue('$100 - $300');
});