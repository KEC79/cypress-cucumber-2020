Feature: Send Feedback

As a customer 
I can send my feedback via a form

Scenario: Submit feedback form
Given I open the feedback page
When I fill out feedback form
And I click on send button
Then I see "/sendFeedback.html" in the url