class shoppingpagewithoutlogin {
    apperalOption() {
        return cy.get('.header-navigation > :nth-child(1) > :nth-child(1) > a')
    }
    searchIcon() {
        return cy.get('.menu-search > .fa')
    }
    searchBox() {
        return cy.get('input[name ="search_pattern"]')
    }
    searchButton() {
        return cy.get('.search-box > form > .input-group > .input-group-btn > .btn')

    }
    productDetailsButton() {
        return cy.get(':nth-child(1) > .product-item > .btn')
    }
    addToCartButton() {
        return cy.get('.product-page-cart > .btn-primary')
    }
    myCartButton() {
        return cy.get('.menu > .list-unstyled > :nth-child(3) > a')
    }
    firstProductText() {
        return cy.get(':nth-child(2) > .goods-page-description > h3 > a')
    }
    secondProductText() {
        return cy.get(':nth-child(3) > .goods-page-description > h3 > a')
    }
    thirdProductText() {
        return cy.get(':nth-child(4) > .goods-page-description > h3 > a')
    }
    firstProductQty() {
        return cy.get("select[name='quantity_in_cart[0]']")
    }
    secondProductQty() {
        return cy.get("select[name='quantity_in_cart[1]']")
    }
    thirdProductQty() {
        return cy.get("select[name='quantity_in_cart[2]']")
    }
    checkoutButton() {
        return cy.get('.goods-page > :nth-child(3) > .btn-primary')
    }
    shippingAsBillingCheckbox() {
        return cy.get('.shipping_same_as_billing > label > div > span > .input_checkbox')
    }
    continueCheckoutButton() {
        return cy.get('#checkout_1 > .checkout_buttons > .en')
    }

    firstName() {
        return cy.get('input[name="billingInfo[Firstname]"]')
    }
    lastName() {
        return cy.get('input[name="billingInfo[Lastname]"]')
    }
    email() {
        return cy.get('input[name="billingInfo[Email]"]')
    }
    zip() {
        return cy.get('input[name="billingInfo[Postcode]"]')
    }
    city() {
        return cy.get('input[name="billingInfo[City]"]')
    }
    address1() {
        return cy.get('input[name="billingInfo[Streetline1]"]')

    }
    contact() {
        return cy.get('input[name="billingInfo[Phone]"]')

    }
}

export default new shoppingpagewithoutlogin