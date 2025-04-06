import {Login} from "../Pages/login"
const loginPage = new Login()
import loginData from "../../fixtures/login.json"


describe('UI Test Suite - Automation Practise - Invalid Login',()=>{
    const appUrl = 'https://automationexercise.com';

    before('Launch Automation Exercise Application',()=>{
        cy.visit(appUrl)
    })

    it('Test Case 003 - Invalid User Login', ()=>{
        loginPage.navigateToLoginPage()

        loginPage.enterInvalidLoginCredentials(loginData.username,loginData.invalidpassword)

        loginPage.clickOnLoginButton()

        loginPage.verifyInvalidCredErrorMessage()
    })
})