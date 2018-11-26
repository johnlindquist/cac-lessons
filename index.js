#!/usr/bin/env node

const cac = require("cac")
const cli = cac()

cli.command("<name>")
  .action(name => {
    console.log(`Hi ${name}. Today is ${new Date().toDateString()}`)
  })

cli.parse()