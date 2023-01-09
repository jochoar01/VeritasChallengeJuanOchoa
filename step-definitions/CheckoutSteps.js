const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var checkout = client.page.CheckoutPage();



  Then('go to checkout page', function () {
    return  checkout.waitForElementVisible("@checkoutButton").click("@checkoutButton").pause(2000)
  });

  Then('fill checkout form with name {string} Last name {string} postal code {string} and press continue button', function (name, lastName, postalCode) {
    return  checkout.waitForElementVisible("@name").setValue("@name",name)
            .setValue("@lastName",lastName)
            .setValue("@postalCode",postalCode).
            click("@continueButton").pause(2000)
  });

