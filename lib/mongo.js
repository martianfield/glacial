/*
'use strict';
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let uri = 'mongodb://localhost:27017/test'
let db;

function connect() {
  if(!db) {
    db = MongoClient.connect(uri);
  }
  return db;
}

const readAll = (collectionName) => {
  return new Promise((resolve, reject) => {
    connect()
      .then((db) => {
        return db.collection(collectionName).find({});
      })
      .then((cursor) => {
        return cursor.toArray();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const readOne = (collectionName, id) => {
  return new Promise((resolve, reject) => {
    connect()
      .then((db) => {
        return db.collection(collectionName).find({_id:ObjectID.createFromHexString(id)}).limit(1).next()
      })
      .then((data) => {
        if(data === null) {
          reject(new Error("not found"));
        }
        else {
          resolve(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  })
};

module.exports.readAll = readAll;
module.exports.readOne = readOne;
*/