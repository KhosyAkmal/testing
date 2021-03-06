// Importing selenium webdriver for our web browser
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var chai = require('chai');
var assert = require('assert');
var expect = chai.expect;

// Setting path for code to opening the chrome browser
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

describe('Navbar Testing', function(){

    before(function(){
        browser.get('http://beasiswa.polinema.ac.id/');
    });

    this.beforeEach(done => setTimeout(done, 1500));


    it('Test case the title should "Beasiswa Polinema"', function(){
        browser.getTitle().then(function(title){
            expect(title).equals('Beasiswa Polinema');
        })
    });


    it('Test case the title not should "Testing"', function(){
        browser.getTitle().then(function(title){
            expect(title).to.not.equals('Testing');
        })
    })

    it('Test case to redirect to /beranda', function(){
        var xpathUrl = "//a[contains(text(),'Beranda')]"
        browser.findElement(webdriver.By.xpath(xpathUrl)).click();
    })

    it('Test case to redirect to /persyaratan', function(){
        var xpathUrl = "//a[contains(text(),'Persyaratan')]"
        browser.findElement(webdriver.By.xpath(xpathUrl)).click();
    })

    it('Test case to redirect to /pengumuman', function(){
        var xpathUrl = "//a[contains(text(),'Pengumuman')]"
        browser.findElement(webdriver.By.xpath(xpathUrl)).click();
    })

    it('Test case to test search box', function(){
        browser.findElement(webdriver.By.name('search')).sendKeys('Testing');
        browser.findElement(webdriver.By.name('btn_search')).click();
    })

    it('Test case to redirect to /login', function(){
        var xpathUrl = "//a[contains(text(),'Login')]"
        browser.findElement(webdriver.By.xpath(xpathUrl)).click();
    })

    it('Test case to test login', function(){
        browser.findElement(webdriver.By.name('username')).sendKeys('1741720212');
        browser.findElement(webdriver.By.name('password')).sendKeys('1741720212');
        browser.findElement(webdriver.By.name('btnLogin')).click();
    })

    it('Test case to redirect to /kontak', function(){
        var xpathUrl = "//a[contains(text(),'Kontak')]"
        browser.findElement(webdriver.By.xpath(xpathUrl)).click();
    })

    try {
        this.afterAll(function(){
            setTimeout(() => {
                browser.quit();
            }, 2000);
        });   
    } catch (error) {
        console.log(error);
    }
});
