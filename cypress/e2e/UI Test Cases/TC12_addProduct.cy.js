describe('UI Test Suite - Automation Practise - Verify Subscription',()=>{
    beforeEach('Launch Application',()=>{
        cy.launchBrowser()
    })
    it('Test Case 012 - Add Products to cart',()=>{   

        let findProducts = {
            searchProduct1: 'Blue Top',
            searchProduct2: 'Men Tshirt'
        }

        cy.NavigateToMenu('Products')
        cy.verifyProductsPage()
        cy.addProductsToCart(findProducts.searchProduct1)
        cy.addProductsToCart(findProducts.searchProduct2)

        cy.NavigateToMenu('Cart')

        cy.get('#cart_info').should('be.visible')
        cy.get('table#cart_info_table tbody').find('tr').each(($e1, index)=>{
            const productDescription = $e1.find('td.cart_description').text()
            productDescription.includes(findProducts.searchProduct1)
            productDescription.includes(findProducts.searchProduct2)
        })
    })
})