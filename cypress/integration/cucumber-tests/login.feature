Feature: Login to application

As a valid user 
I want to log into application

Scenario: Valid login
Given I open login page
When I submit login credentials
Then I should see the user homepage