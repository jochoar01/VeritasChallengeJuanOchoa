const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var home = client.page.HomePage();

Then('Log out page', function () {
    return home.waitForElementVisible("@menu").click("@menu").click("@logOut")
});

Then('select a product with name {string}', function (product) {
    let productSelector= `//div[text()='${product}']`;
    return client.useXpath()
    .waitForElementVisible(productSelector)
    .assert.elementPresent(productSelector)
    .click(productSelector);     
  });
