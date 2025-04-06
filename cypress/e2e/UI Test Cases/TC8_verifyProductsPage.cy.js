//const { describe } = require("mocha");

describe('UI Test Suite - Automation Practise - Verify Products',()=>{
    it('Test Case 008 - Verify Products Page',()=>{
        let productDetails = {
            productName: 'Blue Top',
            category: 'Women',
            price: '500',
            availability: 'In Stock',
            condition: 'New',
            brand: 'Polo'
        }
            
        cy.launchBrowser()
        cy.NavigateToMenu('Products')
        cy.verifyProductsPage()
        cy.viewProductsByName(productDetails.productName)
        cy.viewProductDetails(productDetails.productName,productDetails.category,productDetails.price,productDetails.availability,productDetails.condition,productDetails.brand)
    })
})