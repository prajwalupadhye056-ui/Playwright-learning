import {test,expect} from '@playwright/test'

test("Handle Autosuggest Dropdown", async ({ page }) => {


// Navigate to Flipkart
    await page.goto("https://www.flipkart.com/");

// Wait for the page to load
    await page.waitForTimeout(3000);

// Close the login popup if it appears
    const closeButton = page.getByText("✕", { exact: true });

    console.log("Visibility check:", await closeButton.isVisible());


    if(await closeButton.isVisible())
    {
        await closeButton.click();
    }

    // Locate the search box and enter the search text
   const searchbox= page.locator("input[name='q']").first()

   await expect(searchbox).toBeVisible()
   await searchbox.fill("smart")

    // Wait for auto suggestions to appear
    await page.waitForTimeout(5000);

    // Locate all auto-suggest options
    // Wait until auto-suggestions are displayed

    const options= page.locator("ul > li")
    await expect(options.first()).toBeVisible()

    // Verify suggestions are displayed
    const count1=await options.count()
    console.log("Number of suggested options:", count1)


    expect(count1).toBeGreaterThan(0)

    //Print the 5th suggestion (if available)
    if(count1 > 5)
    {
     console.log("5th option:", await options.nth(5).innerText())
    }

    //Print all the auto-suggestions one by one
    console.log("Printing all the auto suggestions....")
    for(let i=0;i<count1;i++)
    {
        console.log(await options.nth(i).textContent())


    }
    
    // Select the "smartphone" option

    let optionFound=false
    for(let i=0;i<count1;i++)
    {
    const text=(await options.nth(i).innerText()).trim()

    if(text==="smartphone")
    {
        await options.nth(i).click()
        optionFound=true
        break;
    }
    }

    // Verify the required option was found
    expect(optionFound).toBeTruthy()

    // Wait for the search results page to load
    await page.waitForTimeout(3000);


    // Verify the search URL contains the selected search term
    await expect(page).toHaveURL(/smartphone/i);

    // Verify the search box contains the selected value
    await expect(searchbox).toHaveValue("smartphone")

})
