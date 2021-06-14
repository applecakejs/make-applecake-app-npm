#!/usr/bin/env node
let exec = require("../exec")
let args = require("process").argv;
args = args.slice(2);
if (args.length !== 1) {
  throw Error("please only put name after make-applecake-app")
}
exec.exec("app")
console.log(args);
