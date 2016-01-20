"use strict"

const settings = {};

const set = (key, value) => {
  let tokens = key.split('.')
  tokens.reduce((prev, curr, idx, arr) => {
    if(idx < arr.length - 1) {
      if( prev[curr] === undefined) {
        prev[curr] = {}
      }
    }
    else {
      prev[curr] = value;
    }
    return prev[curr]
  }, settings)
}


module.exports.settings = settings;
module.exports.set = set;