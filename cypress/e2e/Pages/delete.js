export class DeleteAccount{
    weblocators = {
        deleteAccountMenu: 'li a[href="/delete_account"]',
        deleteAccountForm: '.delete-account-form',
        deleteButton: 'button[data-qa="delete-button"]',
        successMessage: '.alert-success'
    }
    
    navigateToDeleteAccountPage(){
        cy.get(this.weblocators.deleteAccountMenu).click()
        cy.url().should('contains','/delete_account')
        cy.get(this.weblocators.deleteAccountForm).should('be.visible')
        cy.contains('Account Deleted!').should('be.visible')
    }
    
    clickOnDeleteButton(){
        cy.get(this.weblocators.deleteButton).click()
    }
    
    verifySuccessMessage(){
        cy.get(this.weblocators.successMessage).should('be.visible')
    }
}