const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var cart = client.page.CartPage();



  Then('go to the cart', function () {    
    return cart.navigate().waitForElementVisible('@yourCart').assert.elementPresent('@yourCart').pause(2000);
  });

  Then('remove product with name {string}', function (product)
   {

    let processProduct = product.toLowerCase().replaceAll(' ', '-');
    let productSelector= `//button[@id='remove-${processProduct}']`;
         return client.useXpath().waitForElementVisible(productSelector)
     .click(productSelector).pause(2000);
  });

