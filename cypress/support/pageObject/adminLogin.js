class adminLoginPage {

    userName() {

        return cy.get(':nth-child(2) > .input-icon > .form-control')
    }

    password() {


        return cy.get(':nth-child(3) > .input-icon > .form-control')
    }

    checkBox() {
        return cy.get('span')
    }

    signInButton() {

        return cy.get('.btn')
    }

    pageTitle() {
        return cy.get('.page-title')
    }
    orders() {
        return cy.get('#menu-orders > a')
    }
    orderID() {
        return cy.get(':nth-child(4) > :nth-child(2) > a')
    }
    frame() {
        return cy.get('.cboxIframe')
    }


}



export default new adminLoginPage