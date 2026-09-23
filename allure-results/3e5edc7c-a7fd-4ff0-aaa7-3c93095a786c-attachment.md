# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day28\075_demoblaze_pom_tests.spec.ts >> DemoBlaze Application Tests >> TC-02 Duplicate Sign Up
- Location: tests\Day28\075_demoblaze_pom_tests.spec.ts:54:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#signin2').getByRole('textbox', { name: 'Username' })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - dialog [active] [ref=f2e2]:
    - document [ref=f2e3]:
      - generic [ref=f2e4]:
        - generic [ref=f2e5]:
          - heading "Sign up" [level=5] [ref=f2e6]
          - button "Close" [ref=f2e7] [cursor=pointer]: ×
        - generic [ref=f2e9]:
          - generic [ref=f2e10]:
            - generic [ref=f2e11]: "Username:"
            - textbox "Username:" [ref=f2e12]
          - generic [ref=f2e13]:
            - generic [ref=f2e14]: "Password:"
            - textbox "Password:" [ref=f2e15]
        - generic [ref=f2e17]:
          - button "Close" [ref=f2e18]
          - button "Sign up" [ref=f2e19]
  - text:             
  - navigation [ref=f2e20]:
    - link "PRODUCT STORE" [ref=f2e21] [cursor=pointer]:
      - /url: index.html
    - list [ref=f2e24]:
      - listitem [ref=f2e25]:
        - link "Home (current)" [ref=f2e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f2e27]: (current)
      - listitem [ref=f2e28]:
        - link "Contact" [ref=f2e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f2e30]:
        - link "About us" [ref=f2e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f2e32]:
        - link "Cart" [ref=f2e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=f2e34]:
        - link "Log in" [ref=f2e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=f2e36]:
        - link "Sign up" [ref=f2e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=f2e39]:
      - list [ref=f2e40]:
        - listitem [ref=f2e41] [cursor=pointer]
        - listitem [ref=f2e42] [cursor=pointer]
        - listitem [ref=f2e43] [cursor=pointer]
      - img "Third slide" [ref=f2e46]
      - button "Previous" [ref=f2e47] [cursor=pointer]
      - button "Next" [ref=f2e50] [cursor=pointer]
  - generic [ref=f2e54]:
    - generic [ref=f2e56]:
      - link "CATEGORIES" [ref=f2e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f2e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f2e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f2e60] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f2e61]:
      - generic [ref=f2e62]:
        - generic [ref=f2e64]:
          - link [ref=f2e65] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f2e66]:
            - heading [level=4] [ref=f2e67]:
              - link "Samsung galaxy s6" [ref=f2e68] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f2e69]
            - paragraph [ref=f2e70]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f2e72]:
          - link [ref=f2e73] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f2e74]:
            - heading [level=4] [ref=f2e75]:
              - link "Nokia lumia 1520" [ref=f2e76] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f2e77]
            - paragraph [ref=f2e78]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f2e80]:
          - link [ref=f2e81] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f2e82]:
            - heading [level=4] [ref=f2e83]:
              - link "Nexus 6" [ref=f2e84] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f2e85]
            - paragraph [ref=f2e86]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f2e88]:
          - link [ref=f2e89] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f2e90]:
            - heading [level=4] [ref=f2e91]:
              - link "Samsung galaxy s7" [ref=f2e92] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f2e93]
            - paragraph [ref=f2e94]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f2e96]:
          - link [ref=f2e97] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f2e98]:
            - heading [level=4] [ref=f2e99]:
              - link "Iphone 6 32gb" [ref=f2e100] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f2e101]
            - paragraph [ref=f2e102]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f2e104]:
          - link [ref=f2e105] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f2e106]:
            - heading [level=4] [ref=f2e107]:
              - link "Sony xperia z5" [ref=f2e108] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f2e109]
            - paragraph [ref=f2e110]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f2e112]:
          - link [ref=f2e113] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f2e114]:
            - heading [level=4] [ref=f2e115]:
              - link "HTC One M9" [ref=f2e116] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f2e117]
            - paragraph [ref=f2e118]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=f2e120]:
          - link [ref=f2e121] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=f2e122]:
            - heading [level=4] [ref=f2e123]:
              - link "Sony vaio i5" [ref=f2e124] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=f2e125]
            - paragraph [ref=f2e126]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=f2e128]:
          - link [ref=f2e129] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=f2e130]:
            - heading [level=4] [ref=f2e131]:
              - link "Sony vaio i7" [ref=f2e132] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=f2e133]
            - paragraph [ref=f2e134]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=f2e136]:
        - listitem [ref=f2e137]:
          - button "Previous" [ref=f2e138]
        - listitem [ref=f2e139]:
          - button "Next" [ref=f2e140] [cursor=pointer]
  - generic [ref=f2e142]:
    - generic [ref=f2e145]:
      - heading "About Us" [level=4] [ref=f2e146]
      - paragraph [ref=f2e147]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e150]:
      - heading "Get in Touch" [level=4] [ref=f2e151]
      - paragraph [ref=f2e152]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e153]: "Phone: +440 123456"
      - paragraph [ref=f2e154]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e158]
  - contentinfo [ref=f2e160]:
    - paragraph [ref=f2e161]: Copyright © Product Store
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test'
  2  | 
  3  | 
  4  | export class SignUp
  5  | {
  6  |     //Locators
  7  |   readonly page: Page;
  8  |   readonly usernameInput: Locator;
  9  |   readonly passwordInput: Locator;
  10 |   readonly signUpButton: Locator;
  11 | 
  12 |   //Constructors
  13 |   constructor(page: Page)
  14 |   {
  15 |   this.page=page
  16 |  const signUp= page.locator('#signin2')
  17 |  this.usernameInput=signUp.getByRole('textbox',{name:"Username"})
  18 |  this.passwordInput=signUp.getByRole('textbox',{name:"Password"})
  19 |  this.signUpButton=signUp.getByRole('button',{name:"Sign up"})
  20 | 
  21 |   }
  22 |   //Actions/ Methods
  23 | 
  24 |   async enterUserName(username:string): Promise<void> 
  25 |   {
> 26 |     await this.usernameInput.fill(username)
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  27 |     
  28 |   }
  29 | 
  30 |   async enterPassword(password:string):Promise<void>
  31 |   {
  32 |    await this.passwordInput.fill(password)
  33 |   }
  34 | 
  35 |   async clickSignUp():Promise<void>
  36 |   {
  37 |     await this.signUpButton.click()
  38 |   }
  39 | 
  40 |    captureNextAlert(): Promise<string> 
  41 |    {
  42 |    // resolve is used to complete the Promise and return the result.
  43 |        return new Promise(resolve => 
  44 |         {
  45 |            this.page.once('dialog',async dialog =>{
  46 | 
  47 |             const message= dialog.message()
  48 |             await dialog.accept()
  49 |             resolve(message)
  50 |            })
  51 |         })
  52 |         }
  53 | 
  54 |     }
```