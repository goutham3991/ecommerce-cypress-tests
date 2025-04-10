import { RegisterPage } from "../Pages/registration";
const registerPage = new RegisterPage()
//import registerData from '../../fixtures/registration.json'


describe('UI Test Suite - Automation Practise - Registeration',()=>{
    before('Launch Automation Exercise Application',()=>{       
        registerPage.openURL()
    })
    it('Test Case 001 and 002 - Register User',()=>{
        registerPage.verifyHomePage()
        registerPage.navigateToSignUpPage()       
        registerPage.verifySignUpForm()
        registerPage.fillupRegistrationForm()
    })
})