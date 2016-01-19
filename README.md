# glacial

A RESTful web service framework for Node.js.

```javascript
const glacial = require('glacial')

// plug in extensions
glacial.use(require('iceworm'))  // a schema creator, validator, mapper
glacial.use(require('snowflea')) // mongoDb abstraction layer

// settings
glacial.set('port', process.env.PORT || 8080)
glacial.set('db', 'mongodb://localhost:27017/test')

// create schema
const cat_schema = glacial.Schema.create({
  name:'*string',
  age:'number'
})

// use schema
glacial.use([cat_schema])

// start
glacial.serve()

```
