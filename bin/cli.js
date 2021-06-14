#!/usr/bin/env node
let exec = require("../exec")
let args = require("process").argv;
let chalk = require("chalk")
args = args.slice(2);
if (args.length !== 1) {
  throw Error(chalk.red("please only put name after make-applecake-app"))
}
exec.exec("app")
