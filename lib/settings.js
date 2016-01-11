"use strict";

const settings = {};
const set = (key, value) => {
  settings[key] = value;
};

module.exports.settings = settings;
module.exports.set = set;