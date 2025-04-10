export class Login{

weblocators = {

    loginMenu: 'li a[href="/login"]',
    loginForm: '.login-form',
    email: 'input[data-qa="login-email"]',
    password: 'input[data-qa="login-password"]',
    loginButton: 'button[data-qa="login-button"]'
    
}

navigateToLoginPage(){
    cy.get(this.weblocators.loginMenu).click()
    cy.url().should('contains','/login')
    cy.get(this.weblocators.loginForm).should('be.visible')
}

enterInvalidLoginCredentials(invalidUserEmail,invalidPassword){
    cy.get(this.weblocators.email).type(invalidUserEmail)
    cy.get(this.weblocators.password).type(invalidPassword)
}

enterValidLoginCredentials(username,password){
    cy.get(this.weblocators.email).type(username)
    cy.get(this.weblocators.password).type(password)
}

clickOnLoginButton(){
    cy.get(this.weblocators.loginButton).click()
}

verifyInvalidCredErrorMessage(){
    cy.wait(3000)
    cy.contains('Your email or password is incorrect').should('be.visible')
}

}