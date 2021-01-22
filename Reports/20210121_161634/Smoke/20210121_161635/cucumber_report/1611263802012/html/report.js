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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page_Contactology - main/h2_Contacts\u0027 FAILED.\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4120)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$4.call(Unknown Source)\n\tat edu.ucf.irl.Login.confirmDashboard(Login.groovy:68)\n\tat ✽.I should have access to dashboard(/Users/sebastiangilarranz/Katalon Studio/PCTE_Similar/Include/features/Register/Register-success.feature:6)\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Page_Contactology - main/h2_Contacts\u0027 located by \u0027//section[@id\u003d\u0027Contacts\u0027]/div/h2\u0027 not found\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4120)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$4.call(Unknown Source)\n\tat edu.ucf.irl.Login.confirmDashboard(Login.groovy:68)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:106)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:73)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:246)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\n\tat Register.run(Register:19)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:394)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:385)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:364)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:356)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:251)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:203)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:152)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:95)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1611263795799.run(TempTestSuite1611263795799.groovy:39)\n",
  "status": "failed"
});
});