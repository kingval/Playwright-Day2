Feature: Login functionality
 
  @Login
  Scenario: Verify login and homepage load successfully
    Given I navigate to the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page