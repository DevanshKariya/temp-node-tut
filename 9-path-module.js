const path = require("path");

console.log(path.sep); //path seperator

const filePath = path.join("/content", "subfolder", "text.txt"); //gives a combined path for any folder or file
console.log(filePath);

const base = path.basename(filePath); //last portion of the path
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
