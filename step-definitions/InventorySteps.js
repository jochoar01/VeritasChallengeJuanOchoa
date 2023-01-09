const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');

var inventoryItem = client.page.InventoryItemPage();


  Then('add to the cart from inventory item page', function () {   
    return inventoryItem.waitForElementVisible("@addToCart").click("@addToCart");
  });

  Then('remove product with name {string}', function (product)
   {
    let productSelector= `//div[text()='${product}']`;
         return client.useXpath().waitForElementVisible(productSelector)
     .click(productSelector);
  });

  Then('go to continue shopping', function () {
    
    return inventoryItem.waitForElementVisible("@continueShoppingButton").click("@continueShoppingButton");
  });