import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../login/loginPage"

Given("I open login page", () => {
    LoginPage.visitLoginPage()
})

When("I submit login credentials", () => {
    LoginPage.fillUsername("username")
    LoginPage.fillPassword("password")
    LoginPage.submitForm()    
})

Then("I should see the user homepage", () => {
    cy.get("#account_summary_tab").should("be.visible")
})