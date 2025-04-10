import { RegisterPage } from "../Pages/registration";
import registerData from '../../fixtures/registration.json'
import login from "../../fixtures/login.json"

describe('UI Test Suite - Automation Practise - Register With Existing User',()=>{
    const registerPage = new RegisterPage()
    const userName = 'Goutham';
    const userEmail = 'gouthamkumar.3991@gmail.com'

    before('Launch Automation Exercise Application',()=>{
        cy.visit('')
    })

    it('Test Case 005 - Register with Existing User', ()=>{

        registerPage.navigateToSignUpPage()
        registerPage.enterSignUpNameAndEmail(registerData.userName,login.username)
        registerPage.clickSignUpButton()
        registerPage.verifyUserAlreadyExistsMsg()

        
    })
})