var fs = require('fs');

const url = 'http://asperule.ovh1.ec-m.fr/form.html';

const {By, Key} = require('selenium-webdriver');

const webdriver = require('selenium-webdriver');


describe('Form test', () => {

    beforeEach(() => {
        require('chromedriver');
        browser = new webdriver.Builder().forBrowser('chrome').build()
    }, 10000);

    test('correct negative answer', async () => {
        await browser.get(url);
        await browser.findElement(By.id("message")).sendKeys("Des loutres");
        await browser.findElement(By.id("button-send")).click();
        var answer = await browser.findElement(By.id("response")).getText();
        expect(answer).toBe("Merci pour votre participation !")
    }, 10000);


    afterEach(async () => {
        await browser.quit()
    })
});