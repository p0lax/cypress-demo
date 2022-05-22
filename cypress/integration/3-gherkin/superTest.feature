Feature: Test

Scenario: Open dropdown and select item
  Given I am on target page
  When I click on the dropdown
  And I click on the item
  Then I should see the item selected