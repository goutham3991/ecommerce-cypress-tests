//const { describe } = require("mocha");

describe('UI Test Suite - Automation Practise - Search Products',()=>{
    it('Test Case 009 - Verify Search Product',()=>{
        let productDetails = {
            productName: 'Soft Stretch Jeans',
        }
            
        cy.launchBrowser()
        cy.NavigateToMenu('Products')
        cy.verifyProductsPage()
        cy.get('#search_product').type(productDetails.productName)
        cy.get('#submit_search').click()
        cy.viewProductsByName(productDetails.productName)
    })
})