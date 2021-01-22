$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sebastiangilarranz/Katalon Studio/PCTE_Similar/Include/features/VerifyContacts/VerifyContacts.feature");
formatter.feature({
  "name": "VerifyContacts using User001",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Contacts",
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
  "name": "I should see existing contacts",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyContacts.verifyContacts()"
});
formatter.result({
  "status": "passed"
});
});