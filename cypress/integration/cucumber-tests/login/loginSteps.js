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

When("I fill username with {string}", (username) => {
    LoginPage.fillUsername(username)
})

When("I fill password with {string}", (password) => {
    LoginPage.fillPassword(password)
})

When("I click on submit login", () => {
    LoginPage.submitForm() 
})  

Then("I should see the user homepage", () => {
    cy.get("#account_summary_tab").should("be.visible")
})

Then("I should see an error message", () => {
    LoginPage.shouldShowErrorMessage()
})