

describe('UI Test Suite - Automation Practise - Invalid Login',()=>{
    const appUrl = 'https://automationexercise.com';
    const userName = 'Goutham';
    const userEmail = 'gouthamkumar.3991@gmail.com'

    before('Launch Automation Exercise Application',()=>{
        cy.visit(appUrl)
    })

    it('Test Case 003 - Invalid User Login', ()=>{
        cy.get('li a[href="/login"]').click()
        cy.url().should('contains', appUrl + '/login')
        cy.get('.login-form').should('be.visible')

        cy.get('input[data-qa="login-email"]').type(userEmail)
        cy.get('input[data-qa="login-password"]').type('Test123123123123')

        cy.get('button[data-qa="login-button"]').click()

        cy.wait(3000)

        cy.contains('Your email or password is incorrect').should('be.visible')
    })
})