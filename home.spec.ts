import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';
import protractor = require('protractor');
import { values } from '@uirouter/angularjs';

describe('Fruit Homepage', () => {

    beforeEach(() => {
        browser.get('/'); // get baseUrl fom conf.js
    });
    it('Should contain Home header Text', () => {
        $$('h1').get(1).getText().then((headerText: string) => {
            // $$('h1') = element.all(by.css('h1'))
            expect(headerText).toBe('Home View');
        });
    });
    it('Should contain SignIn button', () => {
        let signIn = $$('#btnSignIn').get(0);
        signIn.getText().then((buttonText: string) => {
            expect(buttonText).toBe('SIGN IN');
        });
    });
    it('Should contain default Sign in credentials', () => {        
        let username = $('input[name="txtLogin"]');
        let password = $('input[name="txtPassword"]');
        username.getAttribute('value').then((usernameTxt) => {
            expect(usernameTxt).toContain('Yemi');
        });
        password.getAttribute('value').then((passwordTxt) => {
            expect(passwordTxt).toContain('Otey');
        });
    });
    it('Should check that fruit-list page is being visited', () => {
        let fruitListPage: string = '#!/fruit-list';
        let username = $('input[name="txtLogin"]');
        let password = $('input[name="txtPassword"]');
        // Clear input fields, then pass in username and password for Sign In
        username.clear().then(() => { 
            username.sendKeys('Yemi');
        });
        password.clear().then(() => { 
            password.sendKeys('Otey');
        });
        element(by.buttonText('Sign In')).click(); // Click button
        browser.getAllWindowHandles().then(() => {
            expect(browser.getCurrentUrl()).toContain(fruitListPage);
        });
        browser.sleep(1000);
    });
});
