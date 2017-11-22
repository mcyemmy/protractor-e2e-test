import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';
import protractor = require('protractor');

describe('plant Detail page', () => {

    beforeEach(() => {
        browser.get('/'); // get baseUrl fom conf.js
        element(by.buttonText('Sign In')).click(); // SignIn from homepage
        $$('.ng-binding').get(1).element(by.xpath( // Visit plant-detail page
        './ancestor::div[contains(concat(" ", @class, " "), " wj-cell ")][1]')).click();
    });
    it('Should contain plant detail header Text', () => {
        $$('h1').get(1).getText().then((headerText: string) => {
            // $$('h1') is same as element.all(by.css('h1'))
            expect(headerText).toBe('plant Detail View');
        });
    });
    it('Should contain info about plant Region', () => {
        let labelName = 'Region';
        // Use xpath to locate a specific label name and then its corresponding input field
        let inputField = element(by.xpath(
        "//label[. = '" + labelName + "']/following-sibling::input"));
        inputField.getAttribute('value').then((plantRegion) => {
            expect(plantRegion).toBe('Eastern Asia');
        })
    });
    it('Should verify that plant-detail page is being visited', () => { 
        $('plantimagecomponent a[ng-href]').click().then(function () {
            browser.getAllWindowHandles().then((handles) => {
                let newWindowHandle = handles[1]; // this is the new window
                browser.switchTo().window(newWindowHandle).then(function () {
                    expect(browser.driver.getCurrentUrl()).toContain('en.wikipedia.org/wiki');
                });
            });
        });
    });

});
