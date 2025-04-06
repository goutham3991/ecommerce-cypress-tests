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
        cy.visit('https://automationexercise.com')
    }

    verifyLogo() {
        cy.get(this.weblocators.logo).should('be.visible')
    }

    verifyBanners() {
        cy.get(this.weblocators.scrollingImages).should('be.visible')
    }

    navigateToSignUpPage() {
        cy.get(this.weblocators.signupLoginMenu).click()
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

}