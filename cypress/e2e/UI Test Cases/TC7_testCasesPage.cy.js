//const { describe } = require("mocha");

describe('UI Test Suite - Automation Practise - Navigate Test Cases Page',()=>{

    before('Launch Automation Exercise Application',()=>{
        cy.visit('')
    })

    it('Test Case 007 - Navigate to Test Cases Page',()=>{
        cy.NavigateToMenu('Test Cases')
        cy.url().should('contains','test_cases')
        cy.NavigateToMenu('Home')
        cy.verifyHomePage()
    })
})