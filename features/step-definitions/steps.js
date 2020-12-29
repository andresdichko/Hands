const { Given, When, Then } = require("cucumber");
var assert = require("assert");
const searchPage = require("../pageobjects/searchPage");
const Page = require("../pageobjects/page");
const pages = {
  search: searchPage,
  page: Page,
};
var mode = "-";

Given(/^I am on the homepage$/, () => {
  searchPage.open("webhp?hl=en&gl=en"); //Open Google with some parameters
  browser.waitUntil(
    function () {
      return browser.getTitle() == "Google";
    },
    { timeout: 3000 }
  );
});

When(/^I type "([^"]*)" into the search field$/, (text) => {
  searchPage.writeSearchTextInput(text);
});

Then(/^I click the Google Search button$/, () => {
  mode = "normalSearch";
  if (searchPage.GoogleSearchBtn.waitForClickable()) {
    searchPage.SearchButtonClick();
  }
});

Then(/^the suggestions list is displayed$/, () => {
  if (searchPage.suggestionList.isExisting()) {
    searchPage.suggestionList.isDisplayed();
  }
});

Then(/^I go to the search results page$/, () => {
  title = browser.getTitle();

  if (mode == "normalSearch") {
    assert.strictEqual(title, "The name of the wind - Google Search");
  } else {
    if (mode == "suggestionSearch")
      assert.strictEqual(title, "the name of the wind - Google Search");
  }
});

Then(/^the first result is "([^"]*)"$/, (text) => {
  expect(searchPage.firstResultOption).toExist();
  assert.strictEqual(searchPage.firstResultOption.getText(), text);
});

Then(/^I click on the first suggestion in the list$/, () => {
  mode = "suggestionSearch";
  if (searchPage.firstSuggestion.isExisting())
    searchPage.firstSuggestion.waitForDisplayed();
  if (searchPage.firstSuggestion.isDisplayed()) {
    searchPage.firstSuggestion.click();
  }
});

When(/^I click on the first result link$/, () => {
  searchPage.firstResultOption.click();
});

Then(/^I go to the "([^"]*)" page$/, (text) => {
  browser.waitUntil(
    function () {
      return browser.getTitle() === text;
    },
    { timeout: 3000 }
  );
});

Then(/^the page "([^"]*)" is in the results$/, (text) => {
  expect(searchPage.theBooksResultOption).toExist();
  assert.strictEqual(searchPage.theBooksResultOption.getText(), text);
});

When(/^I click on "([^"]*)" page$/, (text) => {
  searchPage.theBooksResultOption.click();
});
