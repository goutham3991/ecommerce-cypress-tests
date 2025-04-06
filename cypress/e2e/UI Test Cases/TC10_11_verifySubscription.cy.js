//const { describe } = require("mocha");

describe('UI Test Suite - Automation Practise - Verify Subscription',()=>{
    beforeEach('Launch Application',()=>{
        cy.launchBrowser()
    })
    it('Test Case 009 - Verify Subscription in Home Page',()=>{          
        cy.NavigateToMenu('Home')
        cy.subscribe()
    })
    it('Test Case 010 - Verify Subscription in cart Page',()=>{   
        cy.NavigateToMenu('Cart')
        cy.subscribe()
    })
})