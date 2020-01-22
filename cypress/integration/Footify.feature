Feature: The Footify marketing site
 
  I want to open a Footify page and sign up for newsletter.
  
  Scenario: Opening a Footify page
    Given I have loaded Footify page
    When I can click on the Footify logo
    Then site will reload

  Scenario: Requesting an invate on Footify page
    Given I have loaded Footify page
    When I click button "Request an invate"
    Then Sign up page will open in the new window 

  Scenario: Fill in sign up form with valid user details
    Given I have loaded Footify sign up page
    When I enter "alicjapycio@gmail.com" into the "Email Adress" field
    And I type "Alicja" into "First Name" field
    And I select "11 a-side" from "Type of team you play for" question
    And I select "Organised league" from "Competition" question
    When I click "Request Invate" button
    Then I can see "Thank you for subscribing!"

  Scenario: Fill in sign up form with invalid user email
    Given I have loaded Footify sign up page
    When I enter "invalidemail" into the "Email Adress" field
    When I click "Request Invate" button.
    Then I can see "Please enter a valid email address"

