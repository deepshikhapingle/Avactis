
import loginpage from "../../../support/pageObject/loginpage";
const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

// Given User is on Home Page
//         When User enter "deepshikha@incubyte.com" and "123456"
//         Then Message displayed "Account and password could not be identified. Try again or create an account."

Given("User is on Signin Page", () => {
    cy.visit("http://localhost/avactis/sign-in.php");
});
When("User enter {string} and {string}", (user, pass) => {
    loginpage.userName().type(user);
    loginpage.passWord().type(pass);
    loginpage.loginButton().click();
});
Then("Message should displayed {string}", (message) => {
    cy.get(loginpage.failedLogin).should("contain", message);
});

