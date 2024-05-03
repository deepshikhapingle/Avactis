import adminLogin from "../support/pageObject/adminLogin"
let mydata1
describe('Login', () => {

    beforeEach(() => {
        cy.fixture("admin.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit('http://localhost/avactis/avactis-system/admin/index.php?')
    })
    it('passes', () => {
        cy.adminLogin(mydata1.userID, mydata1.password);
        adminLogin.checkBox().click();
        adminLogin.signInButton().click();
        adminLogin.pageTitle().invoke("text").should("eq", mydata1.homeTitle);
        adminLogin.orders().click()
        adminLogin.orderID().click()
        //adminLogin.frame();
        cy.frameLoaded('.cboxIframe');
        cy.iframe('.cboxIframe').find('table.borderless.table-bordered.table-striped>tbody>tr:nth-child(1)>td:nth-child(3)').invoke("text").should("eq", "00002")
        cy.iframe('.cboxIframe').find('.table.borderless.table-bordered.table-striped>tbody>tr:nth-child(6)>td:nth-child(3)').invoke("text").should("eq", "$881.97")
        cy.iframe('.cboxIframe').find('.table.table-hover.table-condensed.table-striped.borderless>tbody>tr>td:nth-child(3)')
            .invoke("text").should("eq", "Avactis T-ShirtOptionsSize: SIce Age 3 - Dawn of the DinosaursHP TouchSmart")

    })
})