describe('UI Test Suite - Automation Practise - Register With Existing User',()=>{
    const appUrl = 'https://automationexercise.com';
    const userName = 'Goutham';
    const userEmail = 'gouthamkumar.3991@gmail.com'

    before('Launch Automation Exercise Application',()=>{
        cy.visit(appUrl)
    })

    it('Test Case 005 - Register with Existing User', ()=>{
        cy.get('li a[href="/login"]').click()
        cy.url().should('contains', appUrl + '/login')
        cy.get('.login-form').should('be.visible')

        cy.get('input[data-qa="signup-name"]').type(userName)
        cy.get('input[data-qa="signup-email"]').type(userEmail)

        cy.get('button[data-qa="signup-button"]').click()

        cy.wait(3000)

        cy.contains('Email Address already exist!').should('be.visible')
    })
})