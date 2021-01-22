Feature: VerifyContacts using User001

  Scenario: Verify Contacts
    Given I am on contactology
    When I login to contactology
    Then I should see existing contacts