'use strict'
const chai = require('chai')
const chai_as_promised = require('chai-as-promised')
chai.use(chai_as_promised)
const should = chai.should()
const expect = chai.expect

const snowflea = require('snowflea')

describe('GET', () => {
  let created_items;
  before(() => {
    snowflea.database.set('uri', 'mongodb://localhost:27017/test')
    return snowflea.deleteAll('glacial_cats')
      .then((count) => {
        return snowflea.createMany('glacial_cats',[
          {"name": "Bonnie", "age": 24},
          {"name": "Connie", "age": 22},
          {"name": "Annie", "age": 24}
        ])
      })
      .then((items) => {
        created_items = items
      })
      .catch((err) => {
        console.log("ERROR:", err.message)
      })
  })
  it('readAll', () => {
    'all'.should.equal('all')
  })
})

