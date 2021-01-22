Feature: Register to Contactology

  Scenario: Register
    Given I am on contactology
    When I register to contactology
    Then I should have access to dashboard
    
    