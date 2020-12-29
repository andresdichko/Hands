const Page = require("./page");
var assert = require("assert");

class searchPage extends Page {
  get suggestionList() {
    return $('[jsname="aajZCb"]'); // return $('[jsname="erkvQe"]')
  }
  get textInput() {
    return $('input[name="q"]');
  }
  get firstSuggestion() {
    return $('li:nth-of-type(1)  div[role="option"]');
  }
  get GoogleSearchBtn() {
    return $('input[name="btnK"]');
  }
  get firstResultOption() {
    return $('//h3[@class="LC20lb DKV0Md"][1]');
  }

  get theBooksResultOption() {
    return $(
      '//h3[@class="LC20lb DKV0Md"]/span[text()="The Books - Patrick Rothfuss"]'
    );
  }

  SearchButtonClick() {
    this.GoogleSearchBtn.click();
  }
  writeSearchTextInput(text) {
    this.textInput.setValue(text);
  }
  tabName() {
    expect((browser.getTitle() = "The name of the wind - Google Search"));
  }
}

module.exports = new searchPage();
