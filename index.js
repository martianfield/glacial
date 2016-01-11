"use strict";

module.exports.createRouter = require(__dirname + '/lib/createRouter.js');
module.exports.set = require(__dirname + '/lib/settings.js').set;
module.exports.settings = require(__dirname + '/lib/settings.js').settings;
module.exports.datastores = {
  mongo: require(__dirname + '/lib/mongo.js')
}