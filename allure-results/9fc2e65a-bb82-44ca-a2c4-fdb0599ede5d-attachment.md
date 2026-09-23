# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day28\075_demoblaze_pom_tests.spec.ts >> DemoBlaze Application Tests >> TC-10 Complete Purchase
- Location: tests\Day28\075_demoblaze_pom_tests.spec.ts:219:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |   readonly page: Page;
  5  |   readonly signUpLink: Locator;
  6  |   readonly loginLink: Locator;
  7  |   readonly cartLink: Locator;
  8  |   readonly productCards: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |       this.page = page;
  12 |       this.signUpLink = page.locator('a#signin2');
  13 |       this.loginLink = page.locator('a#login2');
  14 |       this.cartLink = page.locator('a[href="cart.html"]');
  15 |       this.productCards = page.locator('#tbodyid .card');
  16 |     }
  17 | 
  18 |      async goto(): Promise<void> {
> 19 |     await this.page.goto('https://demoblaze.com');
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  20 |   }
  21 | 
  22 |   async clickSignUp(): Promise<void> {
  23 |     await this.signUpLink.click();
  24 |   }
  25 | 
  26 |   async clickLogin(): Promise<void> {
  27 |     await this.loginLink.click();
  28 |   }
  29 | 
  30 |   async clickCart(): Promise<void> {
  31 |     await this.cartLink.click();
  32 |   }
  33 | 
  34 |    async filterByCategory(category: 'Phones' | 'Laptops' | 'Monitors'): Promise<void> {
  35 |    await this.page.locator(`a:has-text("${category}")`).click();
  36 |    await this.productCards.first().waitFor();
  37 |   }
  38 | 
  39 |     async clickProductByName(productName: string): Promise<void> {
  40 |     await this.page.locator(`a.hrefch:has-text("${productName}")`).click();
  41 |   }
  42 | 
  43 |     async getWelcomeMessage(): Promise<string | null> {
  44 |     const welcomeElement = this.page.locator('#nameofuser');
  45 |     await welcomeElement.waitFor({ state: 'visible' });
  46 |     return await welcomeElement.textContent();
  47 |   }
  48 | 
  49 |     async isProductVisible(productName: string): Promise<boolean> {
  50 |     const product = this.page.locator(`a.hrefch:has-text("${productName}")`);
  51 |     return await product.isVisible();
  52 |   }
  53 | 
  54 | async waitForProduct(productName: string): Promise<void> {
  55 | await this.page.locator(`a.hrefch:has-text("${productName}")`).waitFor({ state: 'visible' });
  56 |   }
  57 | }
```