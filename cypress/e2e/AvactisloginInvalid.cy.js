let mydata1
describe('Login via custom command', () => {

    beforeEach(() => {
        cy.fixture("Deep.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit('http://localhost/avactis/sign-in.php')
    })
    it('LoginFails', () => {
        cy.login(mydata1.email1, mydata1.password);
        cy.get('.col-lg-8 > .btn').click();
        cy.get('.note').invoke("text").should("eq", "Account and password could not be identified. Try again or create an account.");


    })
})