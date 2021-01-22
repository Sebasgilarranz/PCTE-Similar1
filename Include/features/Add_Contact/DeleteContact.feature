Feature: Delete Contact

	Scenario: Delete previously created contact
		Given I am on contactology
		When I login to contactology
		And I delete contact previously created
		Then I should no longer see contact