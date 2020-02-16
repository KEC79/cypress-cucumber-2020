Feature: Login to application

As a valid user 
I want to log into the application
As an invalid user 
I cannot log into the application

Scenario: Valid login
Given I open login page
And I reload the browser
When I fill username with "username"
And I fill password with "password"
And I click on submit login 
Then I should see the user homepage

#@focus
Scenario: Invalid login
Given I open login page
And I want to wait 2000 milliseconds
And I see "Zero - Log in" in the title
And I see "/login" in the url
When I fill username with "invalid username"
And I fill password with "invalid password"
And I click on submit login 
Then I should see an error message