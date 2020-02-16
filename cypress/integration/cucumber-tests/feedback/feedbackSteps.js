import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import FeedbackPage from "../feedback/feedbackPage"


Given("I open the feedback page", () => {
    FeedbackPage.visit()
})

When("I fill out feedback form", () => {
    FeedbackPage.fillFeedbackForm()
})

When("I click on send button", () => {
    FeedbackPage.submitFeedbackForm()
})