export class DeleteAccount{
    // This class contains methods to delete an account in the application
    weblocators = {
        deleteAccountMenu: 'li a[href="/delete_account"]',
        deleteAccountForm: '.delete-account-form',
        deleteButton: 'button[data-qa="delete-button"]',
        successMessage: '.alert-success'
    }
    
    navigateToDeleteAccountPage(){
        cy.get(this.weblocators.deleteAccountMenu).click()
        cy.url().should('contains','/delete_account')
        cy.contains('Account Deleted!').should('be.visible')
    }
    
    clickOnDeleteButton(){
        cy.get(this.weblocators.deleteButton).click()
    }
    
    verifySuccessMessage(){
        cy.get(this.weblocators.successMessage).should('be.visible')
    }
}