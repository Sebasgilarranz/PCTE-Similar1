Feature: Login to Contactology

  Scenario: Login
    Given I am on contactology
    When I login to contactology
    Then I should have access to dashboard

  Scenario: Logout
    Given I am on contactology
    And I login to contactology
    When I logout of contactology
    Then I should no longer have access to dashboard
