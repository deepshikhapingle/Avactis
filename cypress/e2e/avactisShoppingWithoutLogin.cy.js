import shoppingpagewithoutlogin from "../support/pageObject/shoppingpagewithoutlogin"

let mydata1
describe('Shopping without Login', () => {

    beforeEach(() => {
        cy.fixture("Deep.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit('http://localhost/avactis')
    })
    it('Shopping without Login', () => {
        shoppingpagewithoutlogin.apperalOption().click({ force: true });
        shoppingpagewithoutlogin.searchBox().type(mydata1.searchTshirt, { force: true });
        shoppingpagewithoutlogin.searchButton().click({ force: true });
        shoppingpagewithoutlogin.productDetailsButton().click();
        shoppingpagewithoutlogin.addToCartButton().click();
        shoppingpagewithoutlogin.searchIcon().click();
        shoppingpagewithoutlogin.searchBox().type(mydata1.searchMovie);
        shoppingpagewithoutlogin.searchButton().click();
        shoppingpagewithoutlogin.productDetailsButton().click();
        shoppingpagewithoutlogin.addToCartButton().click();
        shoppingpagewithoutlogin.searchIcon().click();
        shoppingpagewithoutlogin.searchBox().type(mydata1.searchLaptop);
        shoppingpagewithoutlogin.searchButton().click();
        shoppingpagewithoutlogin.productDetailsButton().click();
        shoppingpagewithoutlogin.addToCartButton().click();
        shoppingpagewithoutlogin.myCartButton().click();
        shoppingpagewithoutlogin.firstProductText().invoke("text").should("contain", mydata1.searchTshirt);
        shoppingpagewithoutlogin.secondProductText().invoke("text").should("contain", mydata1.searchMovie);
        shoppingpagewithoutlogin.thirdProductText().invoke("text").should("contain", mydata1.searchLaptop);
        shoppingpagewithoutlogin.firstProductQty().select(mydata1.productQty);
        shoppingpagewithoutlogin.secondProductQty().select(mydata1.productQty, { force: true });
        shoppingpagewithoutlogin.thirdProductQty().select(mydata1.productQty, { force: true });
        shoppingpagewithoutlogin.checkoutButton().click();
        shoppingpagewithoutlogin.firstName().type(mydata1.name)
        shoppingpagewithoutlogin.lastName().type(mydata1.lastname);
        shoppingpagewithoutlogin.email().type(mydata1.email1)
        shoppingpagewithoutlogin.zip().type(mydata1.zip);
        shoppingpagewithoutlogin.city().type(mydata1.city);
        shoppingpagewithoutlogin.address1().type(mydata1.Address1);
        shoppingpagewithoutlogin.contact().type(mydata1.number);
        shoppingpagewithoutlogin.shippingAsBillingCheckbox().check();
        shoppingpagewithoutlogin.continueCheckoutButton().click();
        shoppingpagewithoutlogin.billingAddress1Line().should("contain", mydata1.Address1);
        shoppingpagewithoutlogin.deliveryOnNextBusinessDay().check();
        shoppingpagewithoutlogin.continueCheckoutButton2().click();
        shoppingpagewithoutlogin.valueOfFirstProduct().should("contain", mydata1.valueProduct1);
        shoppingpagewithoutlogin.valueOfSecondProduct().should("contain", mydata1.valueProduct2);
        shoppingpagewithoutlogin.valueOfThirdProduct().should("contain", mydata1.valueProduct3);
        shoppingpagewithoutlogin.productQtyFirst().should("contain", mydata1.productQty);
        shoppingpagewithoutlogin.productQtySecond().should("contain", mydata1.productQty);
        shoppingpagewithoutlogin.productQtyThird().should("contain", mydata1.productQty);
        shoppingpagewithoutlogin.shippingCharges().should("contain", mydata1.shippingCharges);
        // shoppingpagewithoutlogin.placeOrderButton().click();
        // shoppingpagewithoutlogin.orderDetails().should("contain", mydata1.orderDetails);
        // shoppingpagewithoutlogin.orderID().should("contain", mydata1.orderID);
        // shoppingPage.orderTotal().should("contain", mydata1.orderTotal);

    })
})