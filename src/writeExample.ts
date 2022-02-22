const fs = require("fs")

const myObj = {
    name: "Maria",
    favoriteColor: "Purple"
}
fs.writeFile(
    `${__dirname}/person${myObj.name}.json`,
    JSON.stringify(myObj, null, "    "),
    (e) => {
        if(e) console.error(e)
        else console.log("File Saved Correctly")
    }
)