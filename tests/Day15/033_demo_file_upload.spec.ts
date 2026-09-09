import { test, expect } from '@playwright/test';

test.beforeEach('Navigate to the File Upload page', async ({ page }) => {
  await page.goto('https://sdetqa.vercel.app/autoplay');
  await expect(page).toHaveURL(/autoplay/);
});

test.afterEach('Closing the page', async ({ page }) => {
  await page.close()
});

test('single file upload', async ({ page }) => {

   const singleFileInput =page.locator('#singleFileInput')
   const uploadSingleButton =page.getByRole('button',{name:'Upload Single File'})
   const uploadStatus=page.locator('#singleFileStatus')
    

   //upload single file (.txt)
    await singleFileInput.setInputFiles("tests/Uploads/link.txt")
    await uploadSingleButton.click()
    await expect(uploadStatus).toHaveText(/Single file selected: link.txt/)


    //upload single file (.pdf)
      await singleFileInput.setInputFiles("tests/Uploads/TruCV-Prajwal Upadhye .pdf")
      await uploadSingleButton.click()
      await expect(uploadStatus).toHaveText(/Single file selected: TruCV-Prajwal Upadhye .pdf/)

      await page.waitForTimeout(5000)

  })
test('multiple files upload', async ({ page }) => {

  const multipleFileInput = page.locator('#multipleFilesInput');
  const uploadMultipleButton = page.getByRole('button', { name: 'Upload Multiple Files' });
  const uploadStatus = page.locator('#multipleFilesStatus');

  await page.waitForLoadState('load') // waiting for loading page

  //upload multiple files
  await multipleFileInput.setInputFiles(["tests/Uploads/link.txt", "tests/Uploads/TruCV-Prajwal Upadhye .pdf"])

  await uploadMultipleButton.click()

  await expect(uploadStatus).toContainText('link.txt');
  await expect(uploadStatus).toContainText('TruCV-Prajwal Upadhye');

  await page.waitForTimeout(5000)


})
