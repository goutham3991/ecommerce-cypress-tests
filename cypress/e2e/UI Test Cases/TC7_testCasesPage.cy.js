//const { describe } = require("mocha");

describe('UI Test Suite - Automation Practise - Navigate Test Cases Page',()=>{
    const appUrl = 'https://automationexercise.com';
    before('Launch Automation Exercise Application',()=>{
        cy.visit(appUrl)
    })

    it('Test Case 007 - Navigate to Test Cases Page',()=>{
        cy.NavigateToMenu('Test Cases')
        cy.url().should('contains','test_cases')
        cy.NavigateToMenu('Home')
        cy.verifyHomePage()
    })
})