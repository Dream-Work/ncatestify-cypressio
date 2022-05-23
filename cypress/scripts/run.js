#!/usr/bin/env node
const {execSync, exec} = require('child_process');

//open cypress (run --headed) and start tests automatically
let arg = process.argv.slice(2).join(" ");
let openCmd = './node_modules/.bin/cypress run --headed --no-exit --env ' + arg;

console.info("** NCA Testify **")
console.info("Open and run cypress (interactive mode) for following arguments:")
console.dir(arg);

var proc = exec(openCmd);