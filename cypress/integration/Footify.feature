Feature: The Footify marketing site
 
  I want to open a Footify page and sign up for newsletter.
  
  Scenario: Opening a Footify page
    Given I have loaded Footify page
    Then I can see the Footify logo
    And I can see "Play the beautiful game"

  Scenario: Go to sing in form
    Given I have loaded Footify page
    Then I click Request an invite button

  Scenario: Fill in sign up form with valid user details
    Given I have loaded Footify sign up page
    When I enter "alicjapycio@gmail.com" into the "EMAIL" field
    And I enter "Alicja" into the "FNAME" field
    And I select "11 a-side" from "Type of team you play for" question
    And I select "Organised league" from "Competition" question
    When I click "Request Invite" button
    Then I can see "Thank you for subscribing!"

  @focus
  Scenario: Fill in sign up form with invalid user email
    Given I have loaded Footify sign up page
    When I enter "invalidemail" into the "EMAIL" field
    When I click "Request invite" button
    Then I can see "Please enter a valid email address"
