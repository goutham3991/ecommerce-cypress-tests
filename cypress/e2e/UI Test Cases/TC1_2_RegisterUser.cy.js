import { RegisterPage } from "../Pages/registration";
const registerPage = new RegisterPage()
import { DeleteAccount } from "../Pages/delete";



describe('UI Test Suite - Automation Practise - Registeration',()=>{
    const deleteAccount = new DeleteAccount()
    const registerPage = new RegisterPage()
    before('Launch Automation Exercise Application',()=>{       
        registerPage.openURL()
    })
    it('Test Case 001 and 002 - Register User',()=>{

        registerPage.verifyHomePage()
        registerPage.navigateToSignUpPage()       
        registerPage.verifySignUpForm()
        registerPage.fillupRegistrationForm()
        deleteAccount.navigateToDeleteAccountPage()

    })
})