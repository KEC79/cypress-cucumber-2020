Feature: Login to application

As a valid user 
I want to log into the application
As an invalid user 
I cannot log into the application

Scenario: Valid login
Given I open login page
When I fill username with "username"
And I fill password with "password"
And I click on submit login 
Then I should see the user homepage

Scenario: Invalid login
Given I open login page
When I fill username with "invalid username"
And I fill password with "invalid password"
And I click on submit login 
Then I should see an error message