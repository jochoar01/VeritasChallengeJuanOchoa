const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var cart = client.page.CartPage();



  Then('go to the cart', function () {
    
    return cart.navigate().waitForElementVisible('@yourCart').assert.elementPresent('@yourCart');
  });

