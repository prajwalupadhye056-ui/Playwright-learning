# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day34\002_file_upload_and_download.spec.ts >> File Upload and  Download >> Upload Text File
- Location: tests\Day34\002_file_upload_and_download.spec.ts:14:9

# Error details

```
Error: ENOENT: no such file or directory, open 'E:\New Documents\Playwright with JSTS\1.LearningBatch\Playwright_learning\Uploads\Test1.txt'
```

# Test source

```ts
  1  | /*
  2  | File Upload & Download using API Chaining
  3  | API Reference:
  4  | https://fakeapi.platzi.com/en/rest/files/
  5  | */
  6  | 
  7  | import { test, expect } from '@playwright/test';
  8  | import fs from 'fs';
  9  | 
  10 | test.describe.serial('File Upload and  Download', () => {
  11 | 
  12 |     let uploadedTextFile = '';
  13 |     
  14 |     test('Upload Text File', async ({ request }) => {
  15 |     
  16 |     const response = await request.post('https://api.escuelajs.co/api/v1/files/upload',
  17 |          {
  18 |                 multipart: {
  19 |                     file: {
  20 |                             name: 'Test1.txt',
  21 |                             mimeType: 'text/plain',
> 22 |                             buffer: fs.readFileSync('./Uploads/Test1.txt')
     |                                        ^ Error: ENOENT: no such file or directory, open 'E:\New Documents\Playwright with JSTS\1.LearningBatch\Playwright_learning\Uploads\Test1.txt'
  23 |                             }
  24 |                         }
  25 |                     }
  26 |                 );
  27 | 
  28 |                   expect(response.status()).toBe(201);
  29 |                 
  30 |                   const responseBody = await response.json();
  31 |                 
  32 |                   expect(responseBody.originalname).toBe('Test1.txt');
  33 |                 
  34 |                   uploadedTextFile = responseBody.filename;
  35 |                 
  36 |                  console.log("Uploaded Text File:", uploadedTextFile);
  37 |                     });
  38 | 
  39 |         test('Download Text File', async ({ request }) => {
  40 |             
  41 |         const response = await request.get(
  42 |                  `https://api.escuelajs.co/api/v1/files/${uploadedTextFile}`
  43 |                     );
  44 |             
  45 |        expect(response.status()).toBe(200);
  46 |             
  47 |        const fileContent = await response.text();
  48 |             
  49 |       expect(fileContent).toContain('welcome to Palywright with TypeScript');
  50 |         });
  51 |             
  52 |  })  
  53 | 
  54 |         
  55 | 
  56 | 
```