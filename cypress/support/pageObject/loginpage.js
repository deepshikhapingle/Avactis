class loginpage {

    loginButton() {
        return cy.get('.col-lg-8 > .btn')
    }
    homePageText() {
        return cy.get('.myaccount_home > p')
    }

    userName() {

        return cy.get("#account_sign_in_form_email_id")
    }
    passWord() {

        return cy.get("#account_sign_in_form_passwd_id")
    }
    failedLogin() {
        return cy.get('.note')
    }
}

export default new loginpage