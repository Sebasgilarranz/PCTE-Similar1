$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sebastiangilarranz/Katalon Studio/PCTE_Similar/Include/features/Register/Register-success.feature");
formatter.feature({
  "name": "Register to Contactology",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register",
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
  "name": "I register to contactology",
  "keyword": "When "
});
formatter.match({
  "location": "Register.IRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have access to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.confirmDashboard()"
});
formatter.result({
  "status": "passed"
});
});