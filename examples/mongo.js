'use strict';
const express = require('express');
const glacial = require(__dirname + '/../index.js');
const datastore = glacial.datastores.mongo;
const iceworm = require('iceworm');


// create express app
const port = process.env.PORT || 8080;
const app =  express();

// create schema using iceworm
const cat_schema = iceworm.Schema.create({
  name:'*string',
  age:'number'
});
const dog_schema = iceworm.Schema.create({
  name:'*string',
  spots:'bool'
});

// set glacial datastore
glacial.set('datastore', datastore);

// create route
const cat_router = glacial.createRouter('cats', cat_schema, 'cats');
const dog_router = glacial.createRouter('dogs', dog_schema, 'dogs');

// use the route
app.use(cat_router);
app.use(dog_router);

// start app
app.listen(port);
console.log(`serving at http://localhost:${port}`);

