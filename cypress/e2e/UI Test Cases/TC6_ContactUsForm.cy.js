describe('UI Test Suite - Automation Practise - Contact US Form',()=>{
    const appUrl = 'https://automationexercise.com';
    const userName = 'Goutham';
    const userEmail = 'gouthamkumar.3991@gmail.com'

    before('Launch Automation Exercise Application',()=>{
        cy.visit(appUrl)
    })

    it('Test Case 006 - Contact US Form', ()=>{

        cy.get('li a[href="/contact_us"]').click()
        cy.get('.contact-form').should('be.visible')

        cy.get('input[data-qa="name"]').type(userName)
        cy.get('input[data-qa="email"]').type(userEmail)
        cy.get('input[data-qa="subject"]').type('Automation Testing is InProgress')
        cy.get('textarea[data-qa="message"]').type('Automation Testing is InProgress!, Enjoying it.')
        //upload folder step needs to be added.
        cy.get('input[data-qa="submit-button"]').click()

        //cy.on('window:alert').click('OK')
        cy.wait(3000)
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')

        cy.get('.btn.btn-success').click()

        cy.url().should('contains',appUrl)




    })
})