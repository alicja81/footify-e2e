/// <reference types="Cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";


Given ('I have loaded Footify page', () => {
    cy.visit('http://www.wearefootify.com/')
})

Then ('I can see the Footify logo', () => {
    cy.get('.top-logo-big').should('be.visible')
})

And ('I can see {string}', (text) => {
    cy.contains(text)
})

Given ('I have loaded Footify page', () => {
    cy.visit('http://www.wearefootify.com/')
})

Then ('I click Request an invite button', () => {
    cy.get('#viewFormOne').invoke('attr', 'target', '_self').click();
})


Given ('I have loaded Footify sign up page', () => {
    cy.visit('http://www.wearefootify.com/beta/index.htm')
})

When('I enter {string} into the {string} field', (value, inputName) => {
    cy.get(`input[name="${inputName}"]`).type(value)
})

And ('I select "11 a-side" from "Type of team you play for" question',() => {
    cy.get('input[name="MMERGE2"]').first().click()
})

And ('I select "Organised league" from "Competition" question', () => {
    cy.get('input[name="MMERGE3"]').first().click()
})

When ('I click {string} button', (text) => {
    cy.contains(text).click()
})
Then ('I can see {string}', (text) => {
    cy.contains('text')
})


Given ('I have loaded Footify sign up page', () => {
    cy.visit('http://www.wearefootify.com/beta/index.htm')
})

When('I enter {string} into the {string} field', (value, inputName) => {
    cy.get(`input[name="${inputName}"]`).type(value)
})

When ('I click "Request Invite" button', (inputValue) => {
    cy.get(`input[name="${inputValue}"]`).click({force: true})
})
Then ('I can see {string}', (text) => {
    cy.contains('text')
})