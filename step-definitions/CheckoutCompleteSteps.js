const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var checkoutTwo = client.page.CheckoutCompletePage();

Then('validate {string} and click in back home button', function (message) {
  return checkoutTwo.assert.containsText('@completeHeader',message)
  .assert.elementPresent("@backHomeButton")  
  .waitForElementVisible("@backHomeButton")
  .assert.elementPresent("@backHomeButton")  
  .click("@backHomeButton");
});
