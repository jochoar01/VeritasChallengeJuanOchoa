### Setup and Installation

1. git clone the repository in your system

2. Now, install the dependencies by running the below command in nightwatch-cucumber repo directory
    ```shell
    npm i
    ```
3. Setup is complete

### Run tests

1. Run simple all tests

    - Running the test file using npm run command. test-demo is set in package.json under `scripts`
        ```shell
        npm test
        ```

2. Run cucumber feature file which has the test scenarios

    - Running `npm test features/E2Eswag.feature` 




#### features/

contains cucumber `.feature` files in which the test scenarios and test steps are written in Gherkin format. Can further group features according to the functionality. Below is an example for ‘featureOne’ feature file

_featureOne.feature_:

```gherkin
 Scenario: Visit Swag website

    Given I open swag website
    Then login page with user name "<userName>" and password "<password>"
    And validate the element exists "<hometitle>"
    And select a product with name "<frstProductName>"
    And add to the cart from inventory item page
    And go to the cart
    And remove product with name "<frstProductName>"
    And go to continue shopping
    And select a product with name "<scndProductName>"
    And add to the cart from inventory item page
    And go to the cart
    And go to checkout page
    And fill checkout form with name "<name>" Last name "<lastName>" postal code "<postalCode  >" and press continue button
    And validate "<scndProductName>" and click in finish button 
    And validate "<thankyouMessage>" and click in back home button
    And Log out page
```

#### step_definitions/

contains actual implementation of the steps written in the features. The implementation uses nightwatchjs. Steps are executed according to the order in the scenario. A particular step is picked, is searched using regex in step_definitions directory and the underlying code is executed.

_LoginSteps.js_:

```javascript

Given('I open swag website', () =>{   
    return page.navigate();
});

When('login page with user name {string} and password {string}', function (user, pwd) {
    return page.waitForElementVisible("@userName").setValue("@userName",user)
    .setValue("@password",pwd).click("@loginButton")
});
```

#### page-objects/

page-object directory has the files containing css/xPath selectors for the web elements of the application.

LoginPage.js_:

```javascript
module.exports = {
    url: 'https://www.saucedemo.com/',
    elements: {
      userName: "#user-name",
      password: "#password",
      loginButton: "#login-button"
    }    
}
```
