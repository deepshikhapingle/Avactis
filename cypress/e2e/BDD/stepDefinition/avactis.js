import loginpage from "../../../support/pageObject/loginpage";
const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

//    Given User is on Home Page
// When User enters "deepshikha@incubyte.co" and "12345"
// Then Message displayed "You can review and modify your account options below."

Given("User is on Home Page", () => {
    cy.visit("http://localhost/avactis/sign-in.php");
});


When("User enters {string} and {string}", (user, pass) => {
    loginpage.userName().type(user);
    loginpage.passWord().type(pass);
    loginpage.loginButton().click();
});
Then("Message displayed {string}", (message) => {
    cy.get(loginpage.homePageText).should("contain", message);
});