import {test,expect} from '@playwright/test'

//Verify that a user can search flights, select the lowest price flight, 
// complete booking, and see confirmation message.

test('BlazeDemo Flight Booking Flow - Select Lowest Price Flight', async ({ page }) => 
{
     // 1. Navigate to BlazeDemo homepage
  await page.goto('https://blazedemo.com/');

  // 2. Select departure city: Boston

  await page.locator('select[name="fromPort"]').selectOption('Boston')

  //3.Select destination city: London

  await page.locator('select[name="toPort"]').selectOption('London')


  //4.Click on Find Flights button

  await page.locator('input[type="submit"]').click()


   // 5. Count number of rows (flights) in the table

   const rows =page.locator('table tbody tr')
   const rowscount= await rows.count()
   console.log("Number of rows count",rowscount)
   expect(rowscount).toBeGreaterThan(0) // Assert: at least one flight exists

   // 6. Capture all prices into an array
   const prices=[]
   for(let i=0;i< rowscount;i++)
   {
    const price= await rows.nth(i).locator('td').nth(5).innerText() // 6th column  index 5
    prices.push(price)
    
   }

   // 7. Log and sort the prices
   console.log("Flight prices", prices)
   const sortedPrices= [...prices].sort() //string sort
   const lowestprice= sortedPrices[0]
   console.log("Lowest Prices",lowestprice)

    // 8. Find row with lowest price and click "Choose This Flight"

    for(let i=0;i<rowscount;i++)
    {
        const price =await rows.nth(i).locator('td').nth(5).innerText()

        if(price===lowestprice)
        {
            await rows.nth(i).locator('input[type="submit"]').click()
            break
        }
    }

    // 9. Fill passenger details on the purchase page

    await page.locator('#inputName').fill("Prajwal Upadhye")
    await page.getByText('Address').fill('249 E Ward')
  
    await page.locator('#city').fill("Pune")
    await page.locator('#state').fill('Maharashtra')
    await page.locator('#zipCode').fill('43240');

    await page.locator("#cardType").selectOption("American Express")
    await page.locator('#creditCardNumber').fill('6789067345231267');
    await page.locator('#creditCardMonth').fill('10');  
   await page.locator('#creditCardYear').fill('2024'); 
   await page.locator('#nameOnCard').fill('John Canedy');

   // Click on Purchase Flight
    await page.locator('input[value="Purchase Flight"]').click()

    // 10. Validate success message

   const confirmationMessage= await page.locator('h1').textContent()
   console.log('Confirmation Message:', confirmationMessage);

   expect(confirmationMessage).toContain('Thank you for your purchase today!')

   await page.waitForTimeout(5000)
    
   await page.close()
   
})