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
    billingAddress1Line() {
        return cy.get('.billing_form.col-lg-6 > .form-group > :nth-child(3)')
    }
    billingAddress2Line() {
        return cy.get('.billing_form.col-lg-6 > .form-group > :nth-child(4)')
    }
    deliveryOnNextBusinessDay() {
        return cy.get(':nth-child(3) > .shipping_method_name > label > .input_radio')
    }
    continueCheckoutButton2() {
        return cy.get('#checkout_2 > .checkout_buttons > .btn-primary')
    }
    valueOfFirstProduct() {
        return cy.get(':nth-child(2) > .product_sale_price > .value')
    }
    valueOfSecondProduct() {
        return cy.get(':nth-child(3) > .product_sale_price > .value')
    }
    valueOfThirdProduct() {
        return cy.get(':nth-child(4) > .product_sale_price > .value')
    }
    productQtyFirst() {
        return cy.get(':nth-child(2) > .product_quantity_selector')
    }
    productQtySecond() {
        return cy.get(':nth-child(3) > .product_quantity_selector')
    }
    productQtyThird() {
        return cy.get(':nth-child(4) > .product_quantity_selector')
    }
    shippingCharges() {
        return cy.get(':nth-child(2) > .price')
    }
    placeOrderButton() {
        return cy.get('#checkout_3 > .checkout_buttons > .btn-primary')
    }
    orderDetails() {
        return cy.get('.row > :nth-child(1) > .portlet-title > .caption')

    }
    orderID() {
        return cy.get(':nth-child(2) > .control-label')
    }
    orderTotal() {
        return cy.get(':nth-child(3) > .price')
    }
    homePageNoLogin() {
        return cy.get('.productset > .col-md-12 > h2')
    }
}

export default new shoppingpagewithoutlogin