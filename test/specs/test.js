var selenium = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

describe('HTML Mad Ducks Tests', function() {
    /*
    Open the localhost website each time
    */
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        this.driver.get('localhost:8080/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });

    /* This should check if we're on the login page by checking the class atribute */
    it('Should be on the login page', function(done) {
        var element = this.driver.findElement(selenium.By.tagName('body'));
        element.getAttribute('class').then(function(bclass) {
            expect(bclass).toBe('shrine-login');
            done();
        });
    });

    /* This should check if we have a username field by using its class */
    it('Should have an username field', function(done) {
        var element = this.driver.findElement(selenium.By.id('username-input'));
        element.getAttribute('class').then(function(bclass) {
            expect(bclass).toMatch('mdc-text-field__input');
            done();
        });
    });

    /* This button should have 'Sign up' as textContent */
    it('Should have a signup text',function(done){
        var element = this.driver.findElement(selenium.By.id('signp'));
        element.getAttribute('textContent').then(function(text){
            expect(text).toMatch('Sign up');
            done();
        })
    });
});