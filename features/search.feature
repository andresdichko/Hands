Feature: Google Homepage Search

    Background: Open browser and go to Google
        Given I am on the homepage

    Scenario: User can search with Google Search - Error
        When I type "The name of the wind" into the search field
        And I click the Google Search button
        Then I go to the search results page
        And the first result is "The Name of the Wind - Patrick Rothfuss"
        When I click on the first result link
        Then I go to the "Patrick Rothfuss - The Books" page

    Scenario: User can search by using the suggestions - Error
        When I type "The name of the w" into the search field
        And the suggestions list is displayed
        And I click on the first suggestion in the list
        Then I go to the search results page
        And the first result is "The Name of the Wind - Patrick Rothfuss"
        When I click on the first result link
        Then I go to the "Patrick Rothfuss - The Books" page

    Scenario: User can search with "Google Search"
        When I type "The name of the wind" into the search field
        And I click the Google Search button
        Then I go to the search results page
        And the first result is "The Name of the Wind - Wikipedia"
        When I click on the first result link
        Then I go to the "The Name of the Wind - Wikipedia" page

    Scenario: User can search by using the suggestions
        When I type "The name of the w" into the search field
        And the suggestions list is displayed
        And I click on the first suggestion in the list
        Then I go to the search results page
        And the first result is "The Name of the Wind - Wikipedia"
        When I click on the first result link
        Then I go to the "The Name of the Wind - Wikipedia" page

    Scenario: User can search The Books - Patrick Rothfuss with suggestions in Google Search
        When I type "The name of the w" into the search field
        And the suggestions list is displayed
        And I click on the first suggestion in the list
        Then I go to the search results page
        And the page "The Books - Patrick Rothfuss" is in the results
        When I click on "The Books - Patrick Rothfuss" page
        Then I go to the "Patrick Rothfuss - The Books" page

    Scenario: User can search The Books - Patrick Rothfuss with Google Search
        When I type "The name of the wind" into the search field
        And I click the Google Search button
        Then I go to the search results page
        And the page "The Books - Patrick Rothfuss" is in the results
        When I click on "The Books - Patrick Rothfuss" page
        Then I go to the "Patrick Rothfuss - The Books" page
