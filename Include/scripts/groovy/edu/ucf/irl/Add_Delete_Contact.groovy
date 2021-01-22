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



class Add_Delete_Contact {
	@Given ("I add contact")
	def addContact(){
		WebUI.setText(findTestObject('Object Repository/Page_Contactology - main/input_Name_contactName'), 'Contact004')

		WebUI.setText(findTestObject('Object Repository/Page_Contactology - main/input_Phone Number_contactNumber'), '1112223333')

		WebUI.setText(findTestObject('Object Repository/Page_Contactology - main/input_Email_contactEmail'), 'Contact004@test.com')

		WebUI.setText(findTestObject('Object Repository/Page_Contactology - main/input_Address_contactAddress'), '123 Test ST Orlando FL 32826')

		WebUI.click(findTestObject('Object Repository/Page_Contactology - main/button_Create Contact'))
	}
	@Then ("I should see contact on contactlist")
	def seeContact() {

		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Contactology - main/input_Delete_name3'),5)
		WebUI.closeBrowser()
	}
	@When ("I delete contact previously created")
	def deleteContact(){
		WebUI.click(findTestObject('Object Repository/Page_Contactology - main/button_Delete'))
	}
	@Then ("I should no longer see contact")
	def verifyNoContact() {
		WebUI.verifyElementNotPresent(findTestObject('Object Repository/Page_Contactology - main/input_Delete_name3'),5)
		WebUI.closeBrowser()
	}
}