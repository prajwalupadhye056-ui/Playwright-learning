import{test,expect} from '@playwright/test'

test('1.Xpath demo with playwright',async({page}) =>
{
 await page.goto('https://demowebshop.tricentis.com/');

  // 1. Absolute XPath (Full XPath) - Not recomended

  const logo=page.locator('/html/body/div[4]/div[1]/div[1]/div[1]/a/img')
  await expect(logo).toBeVisible();  // Expect the logo to be visible

   // 2. Relative XPath (Partial XPath) // with Single attribute
    //Syntax:    //tagname[@arrt=value]

  //2. Relative Xpath(Partial Xpath)

  const relativeLogo= page.locator("//img[@alt='Tricentis Demo Web Shop']")
  await expect(relativeLogo).toBeVisible();  // Expect the logo to be visible

  // 3. XPath with contains() 

})

