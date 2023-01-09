@one
Feature: Navigation and Assertion

  Scenario: Visit Simple Site website

    Given I open swag website
    Then login page
    And the element exists "PRODUCTS"
