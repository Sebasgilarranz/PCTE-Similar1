$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sebastiangilarranz/Katalon Studio/PCTE_Similar/Include/features/login/Login-success.feature");
formatter.feature({
  "name": "Login to Contactology",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login",
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
  "name": "I should have access to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.confirmDashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout",
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
  "keyword": "And "
});
formatter.match({
  "location": "Login.loginToWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logout of contactology",
  "keyword": "When "
});
formatter.match({
  "location": "Login.logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should no longer have access to dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.confirmLogout()"
});
formatter.result({
  "status": "passed"
});
});