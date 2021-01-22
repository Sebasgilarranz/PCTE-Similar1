Feature: AddContact

  Scenario: Add Contact
    Given I am on contactology
    When I login to contactology
    And I add contact
    Then I should see contact on contactlist
