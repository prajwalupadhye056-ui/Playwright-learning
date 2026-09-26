# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day33\001_Put_Patch_Delete_booking.spec.ts >> Update Booking - Create, Get, partial update, Update and delete a Booking Record
- Location: tests\Day33\001_Put_Patch_Delete_booking.spec.ts:21:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 201
```

# Test source

```ts
  15  |     return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  16  | }
  17  | 
  18  | const BASE_URL = "https://restful-booker.herokuapp.com";
  19  | 
  20  | 
  21  | test("Update Booking - Create, Get, partial update, Update and delete a Booking Record", 
  22  |     async ({ request }) => {
  23  | 
  24  |      // Step 1: Create a new booking using POST request
  25  |     const createBookingData = readJson("./test_data/post_request_body.json");
  26  |     const createResponse = await request.post(`${BASE_URL}/booking`, { data: 
  27  |         createBookingData });
  28  | 
  29  |       //validate status code/response
  30  |     expect(createResponse.status()).toBe(200)
  31  |     expect(createResponse.statusText()).toBe("OK")
  32  | 
  33  |     const createdBooking = await createResponse.json()
  34  | 
  35  |     //Step 1:
  36  |     const bookingId = createdBooking.bookingid  // extracting bookingID from json 
  37  |     // response body
  38  | 
  39  |     // Step 2 (optional): Get the created booking using GET request
  40  |     const getResponse = await request.get(`${BASE_URL}/booking/${bookingId}`);
  41  |     
  42  |         //validate status code/response
  43  |     expect(getResponse.status()).toBe(200)
  44  |     expect(getResponse.statusText()).toBe("OK")
  45  |     
  46  |     
  47  |     const bookingDetails = await getResponse.json();
  48  |     console.log("Booking details before update:", bookingDetails);
  49  | 
  50  | 
  51  |      //Create token  - this is request for Put/patch/delete request
  52  | 
  53  |     const tokenData = readJson("./test_data/token_request_body.json"); //username, password
  54  |     const tokenResponse = await request.post(`${BASE_URL}/auth`, { data: tokenData, });
  55  | 
  56  |     //validate status code/response
  57  |     expect(tokenResponse.status()).toBe(200)
  58  |     expect(tokenResponse.statusText()).toBe("OK")
  59  | 
  60  |     const tokenJson=await tokenResponse.json()
  61  |     const token = tokenJson.token
  62  |     console.log("Token generated",token)
  63  | 
  64  | 
  65  |     // Step 3: Partial Update the booking using PATCH request with token in headers
  66  | 
  67  |     const partial_updateData = readJson("./test_data/patch_request_body.json");
  68  | 
  69  |     const partial_updateResponse = await request.patch(`${BASE_URL}/booking/${bookingId}`,
  70  |    {
  71  |         headers: {
  72  |             "Content-Type": "application/json",
  73  |             "Cookie": `token=${token}`,
  74  |         },
  75  |         data: partial_updateData,
  76  |     });
  77  |     
  78  | 
  79  |        //validate status code/response
  80  |         expect(partial_updateResponse.status()).toBe(200)
  81  |         expect(partial_updateResponse.statusText()).toBe("OK")
  82  | 
  83  |         const partial_updatedBooking=await partial_updateResponse.json()
  84  |         console.log("Partially Updated booking",partial_updatedBooking)
  85  | 
  86  |         // Step 4: Full Update the booking using PUT request with token in headers
  87  | 
  88  |         const updateData = readJson("./test_data/put_request_body.json");
  89  | 
  90  |       const updateResponse =  await request.put(`${BASE_URL}/booking/${bookingId}`,{
  91  |       headers: {
  92  |             "Content-Type": "application/json",
  93  |             "Cookie": `token=${token}`,
  94  |         },
  95  |         data: updateData,
  96  |     });
  97  | 
  98  |      //validate status code/response
  99  |      expect(updateResponse.status()).toBe(200)
  100 |      expect(updateResponse.statusText()).toBe("OK")
  101 | 
  102 |      const updatedBooking=await updateResponse.json()
  103 |      console.log("Full Updated booking",updatedBooking)
  104 | 
  105 |      //Step 5: delete booking
  106 | 
  107 | 
  108 |     const deleteResponse= await request.delete(`${BASE_URL}/booking/${bookingId}`, {
  109 |         headers: {
  110 |         "Content-Type": "application/json",
  111 |         "Cookie": `token=${token}`,
  112 |         }
  113 |     });
  114 |         
> 115 |     expect(deleteResponse.status()).toBe(200)
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  116 |     expect(deleteResponse.statusText()).toBe("Created")
  117 | 
  118 |     console.log("Booking detailes are Deleted...")
  119 | 
  120 |     })
```