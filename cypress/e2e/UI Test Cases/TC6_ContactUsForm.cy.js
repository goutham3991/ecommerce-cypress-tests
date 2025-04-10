import { ContactUs } from "../Pages/contactUs";
import contactus from "../../fixtures/contactus.json"

describe('UI Test Suite - Automation Practise - Contact US Form',()=>{
    const contactUsPage = new ContactUs()

    before('Launch Automation Exercise Application',()=>{
        cy.visit('')
    })

    it('Test Case 006 - Contact US Form', ()=>{
        contactUsPage.navigateToContactUsPage()
        contactUsPage.enterContactDetails(contactus.userName,contactus.userEmail,contactus.subject,contactus.message)
        contactUsPage.clickOnSubmitButton()
        contactUsPage.verifySuccessMessage()
        contactUsPage.clickOnContinueButton()
    })
})