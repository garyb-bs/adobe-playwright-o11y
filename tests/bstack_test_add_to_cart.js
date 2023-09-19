const { test } = require('../fixtures');
const { expect } = require('@playwright/test');
var replace = require("replace");

test.afterAll(async () => {
  var o11yUrl = 'https://observability.browserstack.com/builds/' + process.env.BS_TESTOPS_BUILD_HASHED_ID;
  replace({
      regex: "my_link",
      replacement: o11yUrl,
      paths: [process.cwd() + "/reports/report.html"],
      recursive: true,
      silent: true,
  });

  console.log('report built: ' + o11yUrl);
});

test('BStackDemo test add to cart', async ({ page }) => {
  // visit the site
  await page.goto('https://bstackdemo.com/');

  // get name of product we want to add to cart\
  const productToAdd = await page.locator('#\\33  > p').textContent();

  // click on add to cart
  await page.click('#\\33 > .shelf-item__buy-btn');


  // get name of item in cart
  const productInCart = await page.textContent('#__next > div > div > div.float-cart.float-cart--open > div.float-cart__content > div.float-cart__shelf-container > div > div.shelf-item__details > p.title');
  
  // check if product in cart is same as one added
  expect(productInCart).toEqual(productToAdd);
});
