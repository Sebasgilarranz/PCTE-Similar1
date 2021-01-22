package edu.ucf.irl
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class Login {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("I am on contactology")
	def goToWebsite() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.url)
	}

	@When("I login to contactology")
	def loginToWebsite() {
		WebUI.setText(findTestObject('Object Repository/Page_Contactology - login/input_User Name_username'), 'User001')

		WebUI.setEncryptedText(findTestObject('Object Repository/Page_Contactology - login/input_Password_pass'), 'wDz180nZtCQ=')

		WebUI.click(findTestObject('Object Repository/Page_Contactology - login/button_Login'))
	}

	@Then("I should have access to dashboard")
	def confirmDashboard() {
		WebUI.verifyElementText(findTestObject('Object Repository/Page_Contactology - main/h2_Contacts'),'CONTACTS')
	}


	@When("I logout of contactology")
	def logout(){
		WebUI.click(findTestObject('Object Repository/Page_Contactology - main/Page_Contactology - main/a_logout'))
	}

	@Then("I should no longer have access to dashboard")
	def confirmLogout() {
		WebUI.verifyElementNotPresent(findTestObject('Object Repository/Page_Contactology - main/h2_Contacts'),5)
		WebUI.closeBrowser()
	}
}