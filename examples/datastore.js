"use strict";
let data = {
  'cats': [
    { name:"Kitty", age:4 },
    { name:"Purrloin", age: 3}
  ],
  'dogs': [
    { name:"Fido", spots:true },
    { name:"Spot", spots:false }
  ]
};

const readAll = (collectionName) => {
  return new Promise((resolve, reject) => {
    if(data.hasOwnProperty(collectionName)) {
      resolve(data[collectionName]);
    }
    else {
      reject( new Error(`no data for the given collection '${collectionName}'`));
    }
  });
};


module.exports.readAll = readAll;