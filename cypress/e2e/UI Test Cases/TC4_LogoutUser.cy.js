import { Login } from "../Pages/login";
import login from "../../fixtures/login.json";
import { Logout } from "../Pages/logout";

describe('UI Test Suite - Automation Practise - Logout User',()=>{
    const loginPage = new Login()
    const logoutPage = new Logout()
    before('Launch Automation Exercise Application',()=>{
        cy.visit('')
    })
    it('Test Case 004 - Invalid User Login', ()=>{
        loginPage.navigateToLoginPage()
        loginPage.enterValidLoginCredentials(login.username,login.password)
        loginPage.clickOnLoginButton()
        logoutPage.clickOnLogout()

    })
})