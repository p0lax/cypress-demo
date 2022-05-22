import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I am on target page', () => {
  Cypress.env('baseUrl', 'https://www.google.com/');
});

When('I click on the dropdown', () => {});

And('I click on the item', () => {});

Then('I should see the item selected', () => {});
