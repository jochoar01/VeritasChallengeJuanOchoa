
Feature: Navigation and Assertion

  Scenario: Visit Simple Site website

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

    Examples:
    |hometitle|userName     |password    |frstProductName        |scndProductName                  |name       |lastName      |postalCode      |thankyouMessage         |
    | PRODUCTS|standard_user|secret_sauce|Sauce Labs Bike Light  |Sauce Labs Backpack              |Juan       |Ochoa         |051050          |THANK YOU FOR YOUR ORDER|
    | PRODUCTS|standard_user|secret_sauce|Sauce Labs Bolt T-Shirt|Sauce Labs Fleece Jacket         |Pedro      |Perez         |051050          |THANK YOU FOR YOUR ORDER|
    | PRODUCTS|problem_user |secret_sauce|Sauce Labs Onesie      |Test.allTheThings() T-Shirt (Red)|Juan       |ochoa         |051050          |THANK YOU FOR YOUR ORDER|
     