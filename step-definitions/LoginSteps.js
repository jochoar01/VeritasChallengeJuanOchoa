const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var page = client.page.LoginPage();
var home = client.page.HomePage();

Given('I open swag website', () =>{
   
    return page.navigate().waitForElementVisible('body').assert.elementPresent('body');
});



When("login page", ()=>{
    return page.waitForElementVisible("@userName").setValue("@userName","standard_user")
    .setValue("@password","secret_sauce").click("@loginButton")
});

Then("the element exists {string}", (text)=>{
    return home.waitForElementVisible("@header").assert.elementPresent('@header')
    .assert.containsText('@header',text)
});

 Then('Log out page', function () {
    return home.waitForElementVisible("@menu").click("@menu").click("@logOut")
});
