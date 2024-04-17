import loginpage from "../support/pageObject/loginpage"
let mydata1
describe('Login via custom command', () => {

    beforeEach(() => {
        cy.fixture("Deep.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit('http://localhost/avactis/sign-in.php')
    })
    it('passes', () => {
        cy.login(mydata1.email, mydata1.password);
        loginpage.loginButton().click();
        loginpage.homePageText().invoke("text").should("eq", "You can review and modify your account options below.");


    })
})