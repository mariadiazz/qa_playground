import {Builder, By, Capabilities, until} from "selenium-webdriver"
const chromeDriver = require ("chromedriver")
const driver = new Builder ().withCapabilities(Capabilities.chrome()).build()

const fs = require("fs");

test("a screenshot of google", async () => {
    await driver.get("https://www.google.com")
    await driver.wait(until.elementLocated(By.name("q")));
    await fs.writeFile(
        `${__dirname}/google.png`,
        await driver.takeScreenshot(),
        "base64",
        (e) => {
            if(e) console.error(e);
            else console.log("Image Saved Successfully.")
        }
    )
})
afterAll(async () => {
    await driver.quit();
})