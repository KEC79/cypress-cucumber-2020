Feature: Send Feedback

As a customer 
I can send my feedback via a form

Scenario: Submit feedback form with table data
Given I open the feedback page
When I fill out feedback form with the following information
    | name | email         | subject | comment           |
    | Kim  | test@test.com | Hello   | This is a comment |
And I click on send button
Then I see "/sendFeedback.html" in the url
And I can see a success message saying "Thank you for your comments"