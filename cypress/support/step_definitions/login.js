import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {Login} from '../../e2e/Pages/login';
import login from '../../fixtures/login.json';
const loginPage = new Login();

Given ('I am on the login page', () => {
    cy.visit('');
    loginPage.navigateToLoginPage();
});

When ('I enter valid credentials', () => {
    loginPage.enterValidLoginCredentials(login.username, login.password);   
});

Then ('I should be logged in successfully', () => {
    loginPage.clickOnLoginButton();
    cy.url().should('eq', 'https://automationexercise.com/');
});