# HandsOnTest

Made with WebdriverIO (Node.js/JavaScript) and Cucumber.

Needed:  
-Node.js : https://nodejs.org/en/blog/release/v12.18.1/

-Python:  https://www.python.org/downloads/release/python-385/


On console go to cloned repository directory: cd HandsOnTest

To run tests: npm test

To open and see reports, statistics, defects or screenshots: allure open

Note: My first result is a Wikipedia result so i created tests with that page that will finish passed

Output:

 Google Homepage Search     

     User can search with Google Search - Error  
        ✓ Given I am on the homepage
        ✓ When I type "The name of the wind" into the search field
        ✓ And I click the Google Search button
        ✓ Then I go to the search results page
        ✖ And the first result is "The Name of the Wind - Patrick Rothfuss"
        - When I click on the first result link
        - Then I go to the "Patrick Rothfuss - The Books" page
        
     User can search by using the suggestions - Error 
        ✓ Given I am on the homepage
        ✓ When I type "The name of the w" into the search field
        ✓ And the suggestions list is displayed
        ✓ And I click on the first suggestion in the list
        ✓ Then I go to the search results page
        ✖ And the first result is "The Name of the Wind - Patrick Rothfuss"
        - When I click on the first result link
        - Then I go to the "Patrick Rothfuss - The Books" page

     User can search with "Google Search"
        ✓ Given I am on the homepage
        ✓ When I type "The name of the wind" into the search field
        ✓ And I click the Google Search button
        ✓ Then I go to the search results page
        ✓ And the first result is "The Name of the Wind - Wikipedia"
        ✓ When I click on the first result link
        ✓ Then I go to the "The Name of the Wind - Wikipedia" page

     User can search by using the suggestions
        ✓ Given I am on the homepage
        ✓ When I type "The name of the w" into the search field
        ✓ And the suggestions list is displayed
        ✓ And I click on the first suggestion in the list
        ✓ Then I go to the search results page
        ✓ And the first result is "The Name of the Wind - Wikipedia"
        ✓ When I click on the first result link
        ✓ Then I go to the "The Name of the Wind - Wikipedia" page

     User can search The Books - Patrick Rothfuss with suggestions in Google Search  
        ✓ Given I am on the homepage
        ✓ When I type "The name of the w" into the search field
        ✓ And the suggestions list is displayed
        ✓ And I click on the first suggestion in the list
        ✓ Then I go to the search results page
        ✓ And the page "The Books - Patrick Rothfuss" is in the results
        ✓ When I click on "The Books - Patrick Rothfuss" page
        ✓ Then I go to the "Patrick Rothfuss - The Books" page

     User can search The Books - Patrick Rothfuss with Google Search
        ✓ Given I am on the homepage
        ✓ When I type "The name of the wind" into the search field
        ✓ And I click the Google Search button
        ✓ Then I go to the search results page
        ✓ And the page "The Books - Patrick Rothfuss" is in the results
        ✓ When I click on "The Books - Patrick Rothfuss" page
        ✓ Then I go to the "Patrick Rothfuss - The Books" page

 39 passing (28.7s)
 2 failing
 4 skipped



