import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder, ElementArrayFinder} from 'protractor';
import protractor = require('protractor');

describe('plant List page', () => {

    beforeEach(() => {
        browser.get('/'); // get baseUrl fom conf.js
        element(by.buttonText('Sign In')).click(); // SignIn from homepage
    });
    it('Should contain plant List header Text', () => {
        $$('h1').get(1).getText().then((headerText: string) => {
            // $$('h1') is same as element.all(by.css('h1'))
            expect(headerText).toBe('plant List View');
        });
    });  
    it('Should contain a certain number of plants', () => {
        let plantRows = $$('[wj-part="cells"] .wj-row');
            plantRows.count().then((plantCount: number) => {
            // ^Protractor first needs to scroll page to read hidden contents
                // browser.executeScript('window.scrollTo(0,0);').then(() => {                    
                    expect(plantCount).toBeGreaterThan(2);
                // });                
            });
    });
    it('Should contain Strawberry Tree on row 1 column 1', () => {
        let plantRows = $$('[wj-part="cells"] .wj-row');
        let plantRow = plantRows.get(1);
        let plantCols = plantRow.$$('.wj-cell');
        plantCols.get(0).getText().then((plantName) => {
            expect(plantName).toBe('Strawberry Tree');
        });
    });
    it('Should verify that plant-detail page is being visited', () => { 
        let plantDetailPage: string = '#!/plant-detail/2';      
        let plantLink = $$('.ng-binding').get(1);
        // Use xpath to locate the wj-cell for a specific plant link
        // Remove plantLinkCell and the xpath when click on plant link 
        // is fixed so it no longer open up blank error window
        let plantLinkCell = plantLink.element(by.xpath(
        './ancestor::div[contains(concat(" ", @class, " "), " wj-cell ")][1]'));

        plantLinkCell.click(); 
        browser.getAllWindowHandles().then(() => {
            expect(browser.getCurrentUrl()).toContain(plantDetailPage);
        });
        browser.sleep(1000);
    });
});
