const { mkdirSync } = require("fs");

const mkdir = () => {
  mkdirSync("./components");
  mkdirSync("./css");
  mkdirSync("./dist");
};

module.exports = {
    mkdir
}