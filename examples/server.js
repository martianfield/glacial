'use strict'

const glacial = require(__dirname + '/../index.js')

// settings
glacial.set('server.port', process.env.PORT || 8080)
glacial.set('database.uri', 'mongodb://localhost:27017/test')

// create schema
const cat_schema = glacial.Schema.create({
  name:'*string',
  age:'number'
})

// use schema
glacial.use([cat_schema])

// start
glacial.serve()