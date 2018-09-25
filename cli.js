#!/usr/bin/env node
require('exit-on-epipe')
const meow = require('meow')
const { SHRUG } = require('@shrug/shrug')

const cli = meow(`
  Usage
    $ shrug

  Options
    --newline, -n  Add newline after shrug
`, {
  flags: {
    newline: {
      type: 'boolean',
      alias: 'n'
    }
  }
})

process.stdout.write(`${SHRUG}${cli.flags.newline ? '\n' : ''}`)
