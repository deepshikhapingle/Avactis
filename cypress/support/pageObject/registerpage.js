
class RegisterPage {

    getEmail() {
        return cy.get('input[name="customer_info[Customer][Email]"]')
    }
    getPassword() {
        return cy.get('input[name="customer_info[Customer][Password]"]')
    }
    getRePassword() {
        return cy.get('input[name="customer_info[Customer][RePassword]"]')
    }
    getFirstName() {
        return cy.get('input[name="customer_info[Customer][FirstName]"]')
    }
    getLastName() {
        return cy.get('input[name="customer_info[Customer][LastName]"]')
    }
    getCountry() {
        return cy.get("select[name='customer_info[Customer][Country]']")
    }
    getState() {
        return cy.get("select[name='customer_info[Customer][State]']")
    }
    getZip() {
        return cy.get("input[name='customer_info[Customer][ZipCode]']")
    }
    getCity() {
        return cy.get("input[name='customer_info[Customer][City]']")
    }
    getAddress1() {
        return cy.get("input[name='customer_info[Customer][Streetline1]']")
    }
    getAddress2() {
        return cy.get("input[name='customer_info[Customer][Streetline2]']")
    }
    getContact() {
        return cy.get("input[name='customer_info[Customer][Phone]']")
    }
    getRegiste() {
        return cy.get('input[value="Register"]');
    }
}

export default new RegisterPage()