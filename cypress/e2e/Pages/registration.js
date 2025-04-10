import registerData from '../../fixtures/registration.json'

export class RegisterPage {

    //locators

    weblocators = {

        logo: '.logo.pull-left',
        scrollingImages: '.carousel-inner',
        signupName: 'input[data-qa="signup-name"]',
        signupEmail: 'input[data-qa="signup-email"]',
        signupLoginMenu: 'li a[href="/login"]',
        signupForm: '.signup-form',
        signupButton: 'button[data-qa="signup-button"]',
        title: '.radio-inline',
        titleMr: '#uniform-id_gender1',
        registerName: 'input[data-qa="name"]',
        registerEmail: 'input[data-qa="email"]',
        registerPassword: 'input[data-qa="password"]',

    }

    //methods

    openURL() {
        cy.visit('')
    }

    verifyLogo() {
        cy.get(this.weblocators.logo).should('be.visible')
    }

    verifyBanners() {
        cy.get(this.weblocators.scrollingImages).should('be.visible')
    }

    navigateToSignUpPage() {
        cy.get(this.weblocators.signupLoginMenu).click()
        cy.url().should('contains','/login')
        cy.get('.login-form').should('be.visible')
    }

    verifySignUpForm() {
        cy.get(this.weblocators.signupForm).should('be.visible')
    }

    enterSignUpNameAndEmail(userName, userEmail) {
        cy.get(this.weblocators.signupName).type(userName)
        cy.get(this.weblocators.signupEmail).type(userEmail)
    }

    clickSignUpButton() {
        cy.get(this.weblocators.signupButton).click()
    }

    verifyHomePage(){
        cy.get('*.category-products').should('be.visible')
        cy.get('.brands_products').should('be.visible')
        cy.get('.features_items').should('be.visible')
        cy.get('.single-widget').should('be.visible')
    }

    fillupRegistrationForm(){
        this.enterSignUpNameAndEmail(registerData.userName,registerData.userEmail)
        this.clickSignUpButton()
        cy.get('.radio-inline').find('#uniform-id_gender1').click()
        cy.get('input[data-qa="name"]').should('have.value',registerData.userName)
        cy.get('input[data-qa="email"]').should('have.value',registerData.userEmail)
        cy.get('input[data-qa="password"]').type(registerData.password,{log:false})
        cy.get('#days').select('7')
        cy.get('#months').select('October')
        cy.get('#years').select('1993')
        cy.get('#uniform-newsletter').click({force:true})
        cy.get('#uniform-optin').click({force:true})
        cy.contains('Address Information').should('be.visible')
        cy.get('input[data-qa="first_name"]').type(registerData.firstName)
        cy.get('input[data-qa="last_name"]').type(registerData.lastName)
        cy.get('input[data-qa="company"]').type(registerData.company)
        cy.get('input[data-qa="address"]').type(registerData.address)
        cy.get('input[data-qa="address2"]').type(registerData.address2)
        cy.get('select[data-qa="country"]').select('India')
        cy.get('input[data-qa="state"]').type(registerData.state)
        cy.get('input[data-qa="city"]').type(registerData.city)
        cy.get('input[data-qa="zipcode"]').type(registerData.zip)
        cy.get('input[data-qa="mobile_number"]').type(registerData.phone)
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click({force:true})
        cy.contains('Logged in as').should('be.visible')
        cy.contains(registerData.userName).should('be.visible')
    }

    verifyUserAlreadyExistsMsg(){
      cy.contains('Email Address already exist!',{timeout:5000}).should('be.visible')
    }
}