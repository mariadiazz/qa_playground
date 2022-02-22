import { Google } from "../googlePage";

const google = new Google;

test("does a search", async () => {
    await google.navigate();
    await google.search("puppies")
    expect(await google.getResults()).toContain("puppies")
    await google.driver.quit();
})