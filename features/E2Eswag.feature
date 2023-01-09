
Feature: Navigation and Assertion

  Scenario: Visit Simple Site website

    Given I open swag website
    Then login page
    And the element exists "PRODUCTS"
    And select a product with name "Sauce Labs Bike Light"
    And add to the cart from inventory item page
    And go to the cart
    And remove product with name "Sauce Labs Bike Light"
    And go to continue shopping
    And Log out page
