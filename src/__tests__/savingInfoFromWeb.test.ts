import { Google } from "../googlePage";
const fs = require("fs");
const google = new Google ();

test("do a search", async () => {
    await google.navigate();
    await google.search("puppies")
    let text = await google.getResults();
    expect(text).toContain("puppies")
    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e);
        else console.log("Save Successful")
    })
})
afterAll(async () => {
    await google.driver.quit();
})