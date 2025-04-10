export class ContactUs {
    weblocators = {
        contactUsMenu: 'li a[href="/contact_us"]',
        contactUsForm: '.contact-form',
        name: 'input[data-qa="name"]',
        email: 'input[data-qa="email"]',
        subject: 'input[data-qa="subject"]',
        message: 'textarea[data-qa="message"]',
        submitButton: '[data-qa="submit-button"]'
    }

    navigateToContactUsPage(){
        cy.get(this.weblocators.contactUsMenu).click()
        cy.url().should('contains','/contact_us')
        cy.get(this.weblocators.contactUsForm).should('be.visible')
    }

    enterContactDetails(name, email, subject, message){
        cy.get(this.weblocators.name).type(name)
        cy.get(this.weblocators.email).type(email)
        cy.get(this.weblocators.subject).type(subject)
        cy.get(this.weblocators.message).type(message)
    }

    clickOnSubmitButton(){
        cy.get(this.weblocators.submitButton).click({force:true})
    }
    verifySuccessMessage(){
        cy.contains('Success! Your details have been submitted successfully.',{timeout:5000}).should('be.visible')
    }
    clickOnContinueButton(){
        cy.get('.btn.btn-success').click({force:true})
    }
}