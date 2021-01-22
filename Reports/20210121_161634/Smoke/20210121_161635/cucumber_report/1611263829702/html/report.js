$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sebastiangilarranz/Katalon Studio/PCTE_Similar/Include/features/Add_Contact/AddContact.feature");
formatter.feature({
  "name": "AddContact",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Contact",
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
  "name": "I add contact",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Delete_Contact.addContact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see contact on contactlist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Delete_Contact.seeContact()"
});
formatter.result({
  "status": "passed"
});
});