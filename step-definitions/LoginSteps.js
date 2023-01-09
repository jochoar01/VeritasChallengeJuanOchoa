const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var page = client.page.LoginPage();
var home = client.page.HomePage();

Given('I open swag website', () =>{   
    return page.navigate();
});

When('login page with user name {string} and password {string}', function (user, pwd) {
    return page.waitForElementVisible("@userName").setValue("@userName",user)
    .setValue("@password",pwd).click("@loginButton")
});

Then("validate the element exists {string}", (text)=>{
    return home.waitForElementVisible("@header").assert.elementPresent('@header')
    .assert.containsText('@header',text)
});

