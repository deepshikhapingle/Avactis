class loginpage {

    loginButton() {
        return cy.get('.col-lg-8 > .btn')
    }
    homePageText() {
        return cy.get('.myaccount_home > p')
    }
}
export default new loginpage