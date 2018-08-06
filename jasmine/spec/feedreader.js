/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* The test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url should be defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

        /* The test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name should be defined', function() {
            for(let feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            }
         });

    });

    describe('The menu', function() {
        const body = document.querySelector('body');
        /* The test ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */

        it('should be hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* The test ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('should change visibility on clicking', function() {
            const hamburger = document.querySelector('.menu-icon-link');
            //Testing for menu being displayed
            hamburger.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            //Testing for menu being hidden again
            hamburger.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {

        /* The test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('has at least one element', function() {
            const feed = document.querySelector('.feed .entry');
            expect(feed.length).toBeGreaterThan(0);
         });

    });

    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        let firstFeed;
        let secondFeed;
        /* The test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = feed.textContent;
                loadFeed(1, function() {
                    secondFeed = feed.textContent;
                    done();
                });
            });
         });

         it('should be different', function() {
            expect(secondFeed).not.toEqual(firstFeed);
         });

    });

}());
