"use strict";

const snowflea = require('snowflea')
const iceworm = require('iceworm')

// serving
module.exports.run = require(__dirname + '/lib/server.js').run

// routing
module.exports.createRouter = require(__dirname + '/lib/createRouter.js')

// settings
module.exports.set = require(__dirname + '/lib/settings.js').set;
module.exports.settings = require(__dirname + '/lib/settings.js').settings;

// data
module.exports.datastores = {
  mongo: require(__dirname + '/lib/mongo.js')
}

// iceworm
module.exports.Schema = iceworm.Schema

