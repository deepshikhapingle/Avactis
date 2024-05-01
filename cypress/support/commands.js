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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('login', (id, password) => {

    cy.get("#account_sign_in_form_email_id").type(id)
    cy.get("#account_sign_in_form_passwd_id").type(password)

})

Cypress.Commands.add('adminLogin', (id, password) => {
    cy.get(':nth-child(2) > .input-icon > .form-control').type(id)
    cy.get(':nth-child(3) > .input-icon > .form-control').type(password)

})
require('cypress-iframe')