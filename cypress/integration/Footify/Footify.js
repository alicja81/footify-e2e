/// <reference types="Cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";
 
const url = 'http://www.wearefootify.com/'

Given('I have loaded Footify page', () => {
  cy.visit(url)
})

When('I click button "Request an invate"', () => {
    cy.contains("Request an invate").click()
})