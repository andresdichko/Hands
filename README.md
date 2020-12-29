# HandsOnTest

Made with WebdriverIO (Node.js/JavaScript) and Cucumber.

Needed:  
-Node.js : https://nodejs.org/en/blog/release/v12.18.1/

-Python:  https://www.python.org/downloads/release/python-385/

**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--

On console go to cloned repository directory: cd HandsOnTest

To run tests: npm test

To open and see reports, statistics, defects or screenshots: allure open

**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--
**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--**--
Note: My first result is a Wikipedia result so i created tests with that page that will finish passed

Output:

[chrome 87.0.4280.88 windows #0-0] Google Homepage Search
[chrome 87.0.4280.88 windows #0-0]     User can search with Google Search - Error  
[chrome 87.0.4280.88 windows #0-0]        ✓ Given I am on the homepage
[chrome 87.0.4280.88 windows #0-0]        ✓ When I type "The name of the wind" into the search field
[chrome 87.0.4280.88 windows #0-0]        ✓ And I click the Google Search button
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the search results page
[chrome 87.0.4280.88 windows #0-0]        ✖ And the first result is "The Name of the Wind - Patrick Rothfuss"
[chrome 87.0.4280.88 windows #0-0]        - When I click on the first result link
[chrome 87.0.4280.88 windows #0-0]        - Then I go to the "Patrick Rothfuss - The Books" page
[chrome 87.0.4280.88 windows #0-0]
[chrome 87.0.4280.88 windows #0-0]     User can search by using the suggestions - Error 
[chrome 87.0.4280.88 windows #0-0]        ✓ Given I am on the homepage
[chrome 87.0.4280.88 windows #0-0]        ✓ When I type "The name of the w" into the search field
[chrome 87.0.4280.88 windows #0-0]        ✓ And the suggestions list is displayed
[chrome 87.0.4280.88 windows #0-0]        ✓ And I click on the first suggestion in the list
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the search results page
[chrome 87.0.4280.88 windows #0-0]        ✖ And the first result is "The Name of the Wind - Patrick Rothfuss"
[chrome 87.0.4280.88 windows #0-0]        - When I click on the first result link
[chrome 87.0.4280.88 windows #0-0]        - Then I go to the "Patrick Rothfuss - The Books" page
[chrome 87.0.4280.88 windows #0-0]
[chrome 87.0.4280.88 windows #0-0]     User can search with "Google Search"
[chrome 87.0.4280.88 windows #0-0]        ✓ Given I am on the homepage
[chrome 87.0.4280.88 windows #0-0]        ✓ When I type "The name of the wind" into the search field
[chrome 87.0.4280.88 windows #0-0]        ✓ And I click the Google Search button
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the search results page
[chrome 87.0.4280.88 windows #0-0]        ✓ And the first result is "The Name of the Wind - Wikipedia"
[chrome 87.0.4280.88 windows #0-0]        ✓ When I click on the first result link
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the "The Name of the Wind - Wikipedia" page
[chrome 87.0.4280.88 windows #0-0]
[chrome 87.0.4280.88 windows #0-0]     User can search by using the suggestions
[chrome 87.0.4280.88 windows #0-0]        ✓ Given I am on the homepage
[chrome 87.0.4280.88 windows #0-0]        ✓ When I type "The name of the w" into the search field
[chrome 87.0.4280.88 windows #0-0]        ✓ And the suggestions list is displayed
[chrome 87.0.4280.88 windows #0-0]        ✓ And I click on the first suggestion in the list
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the search results page
[chrome 87.0.4280.88 windows #0-0]        ✓ And the first result is "The Name of the Wind - Wikipedia"
[chrome 87.0.4280.88 windows #0-0]        ✓ When I click on the first result link
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the "The Name of the Wind - Wikipedia" page
[chrome 87.0.4280.88 windows #0-0]
[chrome 87.0.4280.88 windows #0-0]     User can search The Books - Patrick Rothfuss with suggestions in Google Search  
[chrome 87.0.4280.88 windows #0-0]        ✓ Given I am on the homepage
[chrome 87.0.4280.88 windows #0-0]        ✓ When I type "The name of the w" into the search field
[chrome 87.0.4280.88 windows #0-0]        ✓ And the suggestions list is displayed
[chrome 87.0.4280.88 windows #0-0]        ✓ And I click on the first suggestion in the list
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the search results page
[chrome 87.0.4280.88 windows #0-0]        ✓ And the page "The Books - Patrick Rothfuss" is in the results
[chrome 87.0.4280.88 windows #0-0]        ✓ When I click on "The Books - Patrick Rothfuss" page
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the "Patrick Rothfuss - The Books" page
[chrome 87.0.4280.88 windows #0-0]
[chrome 87.0.4280.88 windows #0-0]     User can search The Books - Patrick Rothfuss with Google Search
[chrome 87.0.4280.88 windows #0-0]        ✓ Given I am on the homepage
[chrome 87.0.4280.88 windows #0-0]        ✓ When I type "The name of the wind" into the search field
[chrome 87.0.4280.88 windows #0-0]        ✓ And I click the Google Search button
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the search results page
[chrome 87.0.4280.88 windows #0-0]        ✓ And the page "The Books - Patrick Rothfuss" is in the results
[chrome 87.0.4280.88 windows #0-0]        ✓ When I click on "The Books - Patrick Rothfuss" page
[chrome 87.0.4280.88 windows #0-0]        ✓ Then I go to the "Patrick Rothfuss - The Books" page
[chrome 87.0.4280.88 windows #0-0]
[chrome 87.0.4280.88 windows #0-0] 39 passing (28.7s)
[chrome 87.0.4280.88 windows #0-0] 2 failing
[chrome 87.0.4280.88 windows #0-0] 4 skipped



