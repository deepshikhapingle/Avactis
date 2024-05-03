Feature: This is A feature test login functionality on Avactis.
    Scenario: Login with Valid Credentials
        Given User is on Home Page
        When User enters "deepshikha@incubyte.co" and "12345"
        Then Message displayed "You can review and modify your account options below."