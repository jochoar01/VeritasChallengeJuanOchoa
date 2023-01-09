const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var cart = client.page.CartPage();

  Then('go to the cart', function () {    
    return cart.navigate().waitForElementVisible('@yourCart').assert.elementPresent('@yourCart');
  });

  Then('remove product with name {string}', function (product){

    let productSelector= `//button[@id='remove-${product.toLowerCase().replaceAll(' ', '-')}']`;         
    return client.useXpath().waitForElementVisible(productSelector)
    .assert.elementPresent(productSelector) 
    .click(productSelector);
  });

