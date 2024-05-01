import shoppingPage from "../support/pageObject/shoppingPage"

let mydata1
describe('Login via custom command', () => {

    beforeEach(() => {
        cy.fixture("Deep.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit('http://localhost/avactis/sign-in.php')
    })
    it('Shopping', () => {
        cy.login(mydata1.email, mydata1.password);
        shoppingPage.loginButton().click();
        shoppingPage.homePageText().invoke("text").should("eq", "You can review and modify your account options below.");
        shoppingPage.apperalOption().click({ force: true });
        shoppingPage.searchIcon().click();
        shoppingPage.searchBox().type(mydata1.searchTshirt);
        shoppingPage.searchButton().click();
        shoppingPage.productDetailsButton().click();
        shoppingPage.addToCartButton().click();
        shoppingPage.searchIcon().click();
        shoppingPage.searchBox().type(mydata1.searchMovie);
        shoppingPage.searchButton().click();
        shoppingPage.productDetailsButton().click();
        shoppingPage.addToCartButton().click();
        shoppingPage.searchIcon().click();
        shoppingPage.searchBox().type(mydata1.searchLaptop);
        shoppingPage.searchButton().click();
        shoppingPage.productDetailsButton().click();
        shoppingPage.addToCartButton().click();
        shoppingPage.myCartButton().click();
        shoppingPage.firstProductText().invoke("text").should("contain", mydata1.searchTshirt);
        shoppingPage.secondProductText().invoke("text").should("contain", mydata1.searchMovie);
        shoppingPage.thirdProductText().invoke("text").should("contain", mydata1.searchLaptop);
        shoppingPage.firstProductQty().select(mydata1.productQty);
        shoppingPage.secondProductQty().select(mydata1.productQty, { force: true });
        shoppingPage.thirdProductQty().select(mydata1.productQty, { force: true });
        shoppingPage.checkoutButton().click();
        shoppingPage.shippingAsBillingCheckbox().check();
        shoppingPage.continueCheckoutButton().click();
        shoppingPage.billingAddress1Line().should("contain", mydata1.Address1);
        shoppingPage.billingAddress2Line().should("contain", mydata1.Address2);
        shoppingPage.deliveryOnNextBusinessDay().check();
        shoppingPage.continueCheckoutButton2().click();
        shoppingPage.valueOfFirstProduct().should("contain", mydata1.valueProduct1);
        shoppingPage.valueOfSecondProduct().should("contain", mydata1.valueProduct2);
        shoppingPage.valueOfThirdProduct().should("contain", mydata1.valueProduct3);
        shoppingPage.productQtyFirst().should("contain", mydata1.productQty);
        shoppingPage.productQtySecond().should("contain", mydata1.productQty);
        shoppingPage.productQtyThird().should("contain", mydata1.productQty);
        shoppingPage.shippingCharges().should("contain", mydata1.shippingCharges);
        shoppingPage.placeOrderButton().click();
        shoppingPage.orderDetails().should("contain", mydata1.orderDetails);
        shoppingPage.orderID().should("contain", mydata1.orderID);
        shoppingPage.orderTotal().should("contain", mydata1.orderTotal);

    })
})