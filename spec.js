
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('XYZ_Bank_App', function() {
                    it('Deposit', function() {
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 5000;
                        browser.sleep(3000);
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//button')).get(2).click();
browser.sleep(500);
browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath('//select[@name="userSelect"]//option[@value="1"]'))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//select[@name="userSelect"]//option[@value="1"]')).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//button')).get(2).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(3)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//button')).get(3).click();
browser.sleep(500);
browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath('//input'))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath('//input')).clear();
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath('//input')).sendKeys("2000");

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(5)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//button')).get(5).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(1)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//button')).get(1).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(0)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath('//button')).get(0).click();
browser.sleep(500);
browser.sleep(3000);});
});