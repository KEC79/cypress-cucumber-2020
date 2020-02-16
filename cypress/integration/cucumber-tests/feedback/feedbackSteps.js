import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import FeedbackPage from "../feedback/feedbackPage"


Given("I open the feedback page", () => {
    FeedbackPage.visit()
})

When("I fill out feedback form", () => {
    FeedbackPage.fillFeedbackForm()
})

When("I fill out feedback form with the following information", (table) => {
    FeedbackPage.fillFeedbackForm(table.hashes()[0])
})

When("I click on send button", () => {
    FeedbackPage.submitFeedbackForm()
})

Then("I can see a success message saying {string}", (message) => {
    FeedbackPage.canSeeSuccessMessage(message)
})