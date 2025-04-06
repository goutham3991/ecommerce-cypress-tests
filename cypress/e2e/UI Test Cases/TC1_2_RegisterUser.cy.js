import { RegisterPage } from "../Pages/registration";
const registerPage = new RegisterPage()
import registerData from '../../fixtures/registration.json'


describe('UI Test Suite - Automation Practise - Registeration',()=>{

    const appUrl = 'https://automationexercise.com';
    const userName = 'Goutham';
    const userEmail = 'gouthamautomation2@gmail.com'

    before('Launch Automation Exercise Application',()=>{
        
        registerPage.openURL()
    })

    it('Test Case 001 and 002 - Register User',()=>{
        
        //step 1 & 2: Launch Browser and Navigate to Application URL
        cy.log(' URL Launched ' + appUrl)

        //step 3: Verify That home Page is visible successfully
        registerPage.verifyLogo()
        //scrolling images
        registerPage.verifyBanners()
        //Category's & Products & Features Items
        cy.get('*.category-products').should('be.visible')
        cy.get('.brands_products').should('be.visible')
        cy.get('.features_items').should('be.visible')
        //subscription Details 
        cy.get('.single-widget').should('be.visible')

        //Step 4: Click on 'Signup / Login' Button
        registerPage.navigateToSignUpPage()

        //Step 5: verify Login/Sign up Page URL
        cy.url().should('contains', appUrl + '/login')
        cy.get('.login-form').should('be.visible')
        registerPage.verifySignUpForm()

        //Step 6: Enter Name and Email Address
        registerPage.enterSignUpNameAndEmail(registerData.userName,registerData.userEmail)

        //Step 7: Click on Signup Button
        registerPage.clickSignUpButton()

        //Step 8: Verify that 'Enter Account Informration' is visible
        cy.contains('Enter Account Information').should('be.visible')

        //Step 9: Fill Details: Title, name, Email, Password, DOB
        //Title : Select Title. Example "Mr"
        //cy.get('form[method="POST"]').find('.clearfix').should('contains','Title')
        cy.get('.radio-inline').find('#uniform-id_gender1').click()
        cy.get('input[data-qa="name"]').should('have.value',userName)
        cy.get('input[data-qa="email"]').should('have.value',userEmail)
        cy.get('input[data-qa="password"]').type('Dumbu@123',{log:false})
        //cy.get('.form-group').find('label').should('have.text','Date of Birth')
        cy.get('#days').select('7')
        cy.get('#months').select('October')
        cy.get('#years').select('1993')

        //Step 10: Select checkbox 'Sign up for our Newsletter
        cy.get('#uniform-newsletter').click({force:true})

        //Step 11: Select checkbox 'Receive Special Offers from our partners
        cy.get('#uniform-optin').click({force:true})

        //Step 12: Fill details: First Name, Last Name, Company,
        // Address, Address2, Country, State, City, Zipcode,Mobile Number
        cy.contains('Address Information').should('be.visible')
        cy.get('input[data-qa="first_name"]').type(userName)
        cy.get('input[data-qa="last_name"]').type(userName)
        cy.get('input[data-qa="company"]').type('Google')
        cy.get('input[data-qa="address"]').type('Kondapur, Hyderabad')
        cy.get('input[data-qa="address2"]').type('Telangana')
        cy.get('select[data-qa="country"]').select('India')
        cy.get('input[data-qa="state"]').type('Telangana')
        cy.get('input[data-qa="city"]').type('Hyderabad')
        cy.get('input[data-qa="zipcode"]').type('500084')
        cy.get('input[data-qa="mobile_number"]').type('7382527928')

        //Step 13: Click 'Create Account Button'
        cy.get('button[data-qa="create-account"]').click()

        //Step 14: Verify that 'Accoutn Created' is visible
        cy.contains('Account Created!').should('be.visible')

        //Step 15: Click on conntinue button
        cy.get('[data-qa="continue-button"]').click({force:true})

        //Step 16: Verify that 'Logged in as username' is visible
        cy.contains('Logged in as').should('be.visible')
        cy.contains(userName).should('be.visible')

        //Step 17: Click on Delete Account Button
        cy.get('li a[href="/delete_account"]').click()
        cy.wait(3000)
        cy.url().should('contains', appUrl + '/delete_account')

        //Step 18: Verify that 'Account Deleted!' is visible and click continue button
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click({force:true})
    })
})