

describe('UI Test Suite - Automation Practise - Logout User',()=>{
    const appUrl = 'https://automationexercise.com';
    const userName = 'Goutham';
    const userEmail = 'gouthamkumar.3991@gmail.com'

    before('Launch Automation Exercise Application',()=>{
        cy.visit(appUrl)
    })

    it('Test Case 004 - Invalid User Login', ()=>{
        cy.get('li a[href="/login"]').click()
        cy.url().should('contains', appUrl + '/login')
        cy.get('.login-form').should('be.visible')

        cy.get('input[data-qa="login-email"]').type(userEmail)
        cy.get('input[data-qa="login-password"]').type('Dumbu@123')

        cy.get('button[data-qa="login-button"]').click()

        cy.wait(3000)

        cy.url().should('contains',appUrl)
    })
})