import { test, expect } from '@playwright/test';
import APIPage from '../pages/APIPage';

test('API 1: Get All Products List', async ({ page, request }) => {
  const apiPage = new APIPage(page);
  
  await page.goto("https://automationexercise.com/"); // Navigate to the website
  await apiPage.clickAPITesting(); // Click on API testing section
  await apiPage.clickAPI_1(); // Select API 1 for testing
  
  const apiInfo = await apiPage.captureAPIInfo(0); // Extract API details from UI
  console.log("Extracted API Info:", apiInfo);
  
  let response = await request.get(apiInfo.url); // Making GET request

  // Validate response status code
  expect(response.status()).toBe(apiInfo.expectedStatus);

  const responseBody = await response.json(); // Parse response body

  // Validate response structure
  expect(responseBody).toHaveProperty('responseCode');
  expect(responseBody).toHaveProperty('products');
  console.log("API response validated successfully!");
});

test('API 7: POST To Verify Login with valid details', async ({ page, request }) => {
  const apiPage = new APIPage(page);
  
  await page.goto("https://automationexercise.com/"); // Navigate to the website
  await apiPage.clickAPITesting(); // Click on API testing section
  await apiPage.clickAPI_7(); // Select API 7 for testing

  const apiInfo = await apiPage.captureAPIInfo(6); // Extract API details from UI
  console.log("Extracted API Info:", apiInfo);
  
  const requestPayload = {
    email: "testuserprabha32@gmail.com",
    password: "Test@100"
  }; // Sample user credentials (DEMO)
  
  const response = await request.post(apiInfo.url, {
    form: requestPayload
  }); // Making POST request

  // Validate response status code
  expect(response.status()).toBe(apiInfo.expectedStatus);
  
  const responseBody = await response.json(); // Parse response body
  console.log("API Response:", JSON.stringify(responseBody, null, 2));

  // Validate response structure
  expect(responseBody).toHaveProperty('responseCode', apiInfo.expectedStatus);
  expect(responseBody).toHaveProperty('message', apiInfo.expectedMessage);

  console.log("API response validated successfully!");
});
