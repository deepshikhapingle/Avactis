import registerpage from "../support/pageObject/registerpage";

let mydata1
describe('Login via custom command', () => {

    beforeEach(() => {
        cy.fixture("Deep.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit('http://localhost/avactis/register.php')
    })
    it('registerationfail', () => {
        registerpage.getEmail().type(mydata1.email3);
        registerpage.getPassword().type(mydata1.password);
        registerpage.getRePassword().type(mydata1.password);
        registerpage.getFirstName().type(mydata1.name);
        registerpage.getLastName().type(mydata1.lastname);
        registerpage.getCountry().type(mydata1.country);
        registerpage.getState().type(mydata1.state);
        registerpage.getZip().type(mydata1.zip);
        registerpage.getCity().type(mydata1.city);
        registerpage.getAddress1().type(mydata1.Address1);
        registerpage.getAddress2().type(mydata1.Address2);
        registerpage.getContact().type(mydata1.number);
        registerpage.getRegiste().click();
        cy.get('.note').invoke("text").should("eq", "This account name is already taken. Please choose a different account name.");

    })
})