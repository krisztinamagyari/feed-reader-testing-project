# Feed Reader Testing

This project is part of my studies in Udacity's Frontend Web Development Nanodegree program. In this project I was given a web-based application that reads RSS feeds. I had to use Jasmine to write a number of tests against this pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## How to run the application

Clone or download the repository and open the index.html file.
The tests were written in the jasmine/spec/feedreader.js file.
The test results appear at the bottom of the index.html file.
(Passed tests: green, failed tests: red)

## Tests

**Tests for RSS Feeds**
- The allFeeds variable has been defined and it is not empty.
- Each feed has a URL defined and it is not empty.
- Each feed has a name defined and it is not empty.

**Tests for Menu**
- The menu is hidden by default.
- The menu's visibility toggles at clicking the hamburger menu icon.

**Test for Initial entries**
- Ensuring there's at least one entry in the feed.

**Test for New Feed Selection**
- Ensuring that the content actually changes when a new feed is loaded.

## Resources
- Starting code: (http://github.com/udacity/frontend-nanodegree-feedreader)
- Udacity's [JavaScript Testing course](https://www.udacity.com/course/ud549)
- [Jasmine documentation](http://jasmine.github.io)
- Feedreader walkthrough by Matthew Cranford:
    - [Part 1](https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/)
    - [Part 2](https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/)
    - [Part 3](https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/)
    - [Part 4](https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/)
