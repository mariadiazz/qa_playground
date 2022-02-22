import { Builder, Capabilities } from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


test("can load google", async() => {
    //driver.get gets the value that we are looking for in the ()
    await driver.get("https://www.google.com/");
    //driver.quit shut down the browser after the test has finished
    await driver.quit
})