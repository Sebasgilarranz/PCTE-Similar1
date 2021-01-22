$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sebastiangilarranz/Katalon Studio/PCTE_Similar/Include/features/Add_Contact/DeleteContact.feature");
formatter.feature({
  "name": "Delete Contact",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Delete previously created contact",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on contactology",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.goToWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login to contactology",
  "keyword": "When "
});
formatter.match({
  "location": "Login.loginToWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete contact previously created",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Delete_Contact.deleteContact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should no longer see contact",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Delete_Contact.verifyNoContact()"
});
formatter.result({
  "status": "passed"
});
});