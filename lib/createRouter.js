"use strict";

const Schema = require('iceworm').Schema;
const FieldInfo = require('iceworm').FieldInfo;
const settings = require(__dirname + '/settings.js').settings;


module.exports = (path, schema, dataCollectionName) => {
  // make sure we have a schema
  if((schema instanceof Schema) === false) {
    // TODO do something
  }
  const router = require('express').Router();

  // GET all
  router.route('/' + path)
    .get((req, res) => {
      settings.datastore.readAll(dataCollectionName)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.send(err.message);
        })

    });

  // GET one
  router.route('/' + path + '/:id')
    .get((req, res) => {
      let id = req.params.id;
      settings.datastore.readOne(dataCollectionName, id)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.send(err.message);
        })
    });

  return router;
}