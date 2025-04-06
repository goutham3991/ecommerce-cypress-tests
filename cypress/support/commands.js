// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { 
    

//})
Cypress.Commands.add('NavigateToMenu',(menuItem)=>{
    cy.get('ul.nav.navbar-nav').find('li').each(($e1)=>{
        const menuItems = $e1.text()
        if(menuItems.includes(menuItem)){
            cy.wrap($e1).find('a[href]').click()
        }
    })
})

Cypress.Commands.add('verifyHomePage',()=>{
    cy.url().should('eq','https://automationexercise.com/')
    cy.get('ul.nav.navbar-nav').should('be.visible')
})

Cypress.Commands.add('launchBrowser',()=>{
    cy.visit('https://automationexercise.com/')
})

Cypress.Commands.add('verifyProductsPage',()=>{
    cy.get('#search_product').should('be.visible')
    cy.get('.features_items').should('be.visible')
})

Cypress.Commands.add('viewProductsByName',(productName)=>{
    cy.get('.product-image-wrapper').should('be.visible')
        cy.contains('p',productName).closest('.single-products')
        .parents('.product-image-wrapper').find('a')
        .contains('View Product').click();
    cy.get('.product-information').find('h2').should('have.text',productName)
})

Cypress.Commands.add('viewProductDetails',(productName, Category, Price, Availability, Condition, Brand)=>{
    cy.get('.product-information').find('h2').should('have.text',productName)
    cy.get('.product-information').contains(Category)
    cy.get('.product-information').contains(Price)
    cy.get('.product-information').contains(Availability)
    cy.get('.product-information').contains(Condition)
    cy.get('.product-information').contains(Brand)
})

Cypress.Commands.add('subscribe',()=>{
    cy.get('#footer').scrollTo('bottom',{ensureScrollable: false})
    cy.get('#footer').find('h2').should('have.text','Subscription')
    cy.get('#susbscribe_email').type('gouthamkumar.3991@gmail.com')
    cy.get('#subscribe').click()
})

Cypress.Commands.add('addProductsToCart',(product)=>{
    cy.get('.product-image-wrapper').should('be.visible')
    cy.contains('p',product).closest('.single-products')
    .parents('.product-image-wrapper').find('a').contains('Add to cart').click()
    cy.get('.modal-content').should('be.visible')
    cy.get('.modal-content').find('div.modal-body p').should('have.text','Your product has been added to cart.View Cart')
    cy.get('.modal-content').find('div.modal-footer button').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })