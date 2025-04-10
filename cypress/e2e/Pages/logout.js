export class Logout{

    weblocators = {
    
        loginMenu: 'li a[href="/logout"]',
        
    }
    
    clickOnLogout(){
        cy.get(this.weblocators.loginMenu).click()
    }
}