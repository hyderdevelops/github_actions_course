const fs = require("fs");
fs.writeFileSync("./windows.js", `console.log("Hello from windows")`);
fs.writeFileSync("./ubuntu.js", `console.log("Hello from Ubuntu")`);
console.log("Files Generated");
