const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var checkoutTwo = client.page.CheckoutTwoPage();

Then('validate {string} and click in finish button', function (productName) {
  return checkoutTwo.assert.containsText('@inventoryItemName',productName).waitForElementVisible("@finishButton").click("@finishButton");
});


