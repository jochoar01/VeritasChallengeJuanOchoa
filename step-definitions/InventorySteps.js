const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');

var inventoryItem = client.page.InventoryItemPage();

  Then('add to the cart from inventory item page', function () {   
    return inventoryItem.waitForElementVisible("@addToCart").assert.elementPresent('@addToCart').click("@addToCart");
  });  

  Then('go to continue shopping', function () {
    
    return inventoryItem.waitForElementVisible("@continueShoppingButton").assert.elementPresent('@continueShoppingButton')
    .click("@continueShoppingButton");
  });
