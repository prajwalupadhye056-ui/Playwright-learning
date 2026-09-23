import {Page,Locator} from '@playwright/test'


export class SignUp
{
    //Locators
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signUpButton: Locator;

  //Constructors
  constructor(page: Page)
  {
  this.page=page
 this.usernameInput=page.locator('#sign-username')
 this.passwordInput=page.locator('#sign-password')
 this.signUpButton=page.locator('#signInModal button:has-text("Sign up")')

  }
  //Actions/ Methods

  async enterUserName(username:string): Promise<void> 
  {
    await this.usernameInput.fill(username)
    
  }

  async enterPassword(password:string):Promise<void>
  {
   await this.passwordInput.fill(password)
  }

  async clickSignUp():Promise<void>
  {
    await this.signUpButton.click()
  }

   captureNextAlert(): Promise<string> 
   {
   // resolve is used to complete the Promise and return the result.
       return new Promise(resolve => 
        {
           this.page.once('dialog',async dialog =>{

            const message= dialog.message()
            await dialog.accept()
            resolve(message)
           })
        })
        }

    }