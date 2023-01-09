const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var checkout = client.page.CheckoutPage();

  Then('go to checkout page', function () {
    return  checkout.waitForElementVisible("@checkoutButton")
    .assert.elementPresent("@checkoutButton")  
    .click("@checkoutButton")
  });

  Then('fill checkout form with name {string} Last name {string} postal code {string} and press continue button', function (name, lastName, postalCode) {
    return  checkout.waitForElementVisible("@name")
            .assert.elementPresent("@name")  
            .setValue("@name",name)
            .assert.elementPresent("@lastName")  
            .setValue("@lastName",lastName)
            .assert.elementPresent("@postalCode")  
            .setValue("@postalCode",postalCode)
            .assert.elementPresent("@continueButton")  
            .click("@continueButton")
  });

