'use strict'

const express = require('express')
const settings = require(__dirname + '/settings.js').settings
const app = express()

const run = () => {
  app.get('/', (req, res) => {
    res.send("Alright")
  })

  app.listen(settings.server.port, () => {
    console.log(`serving at http://localhost:${settings.server.port}`)
  })
}

module.exports.run = run