# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day27\074_POM_test_demo.spec.ts >> Demoblaze Tests >> User can sign up with a new account
- Location: tests\Day27\074_POM_test_demo.spec.ts:25:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.clear: Target page, context or browser has been closed
Call log:
  - waiting for locator('sign-username')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class SignupPage
  4  | {
  5  |     // Define properties
  6  | 
  7  |     private readonly page: Page;
  8  |     private readonly signUpLink: Locator;
  9  |     private readonly usernameInput: Locator;
  10 |     private readonly passwordInput: Locator;
  11 |     private readonly signUpButton: Locator;
  12 | 
  13 |     // Initialize page context and elements
  14 |     constructor(page:Page) //is used to receive the Playwright Page object 
  15 |     //and make it available inside the Page Object class, so we can interact with the browser 
  16 |     // through this.page.
  17 |     {
  18 |     this.page=page;
  19 |     this.signUpLink=this.page.locator("#signin2")
  20 |     this.usernameInput=this.page.locator("sign-username")
  21 |     this.passwordInput=this.page.locator("#sign-password")
  22 |     this.signUpButton=this.page.locator('div.modal-footer button:has-text("Sign up")')
  23 |     }
  24 | 
  25 |     // Create reusable user actions
  26 |     async navigatetoSignUp()
  27 |     {
  28 |         await this.signUpLink.click()
  29 |     }
  30 | 
  31 |     async fillUsername(username: string) {
> 32 |         await this.usernameInput.clear();
     |                                  ^ Error: locator.clear: Target page, context or browser has been closed
  33 |         await this.usernameInput.fill(username);
  34 |     }
  35 | 
  36 |      async fillPassword(password: string) {
  37 |         await this.passwordInput.clear();
  38 |         await this.passwordInput.fill(password);
  39 |     }
  40 | 
  41 |     async submitSignUp() {
  42 |         await this.signUpButton.click();
  43 |     }
  44 | 
  45 |     async signUp(username: string, password: string): Promise<string> {
  46 |         await this.navigatetoSignUp()
  47 |         await this.fillUsername(username);
  48 |         await this.fillPassword(password);
  49 | 
  50 |         const dialogPromise = this.page.waitForEvent('dialog');
  51 |         await this.submitSignUp();
  52 | 
  53 |         const dialog = await dialogPromise;
  54 |         const message = dialog.message();
  55 |         await dialog.accept();
  56 | 
  57 |         return message;
  58 |     }
  59 | 
  60 | }
```