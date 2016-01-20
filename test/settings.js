'use strict'
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

const glacial = require(__dirname + '/../index.js')

describe('Settings', () => {
  it('set()', () => {
    glacial.set('first.one', 37)
    glacial.set('first.two', 'william')
    glacial.set('second.one', true)
    glacial.set('second.one', false)
    glacial.set('down.the.rabbit.hole', 'Alice')

    let settings = glacial.settings

    expect(settings.first.one).to.equal(37)
    expect(settings.first.two).to.equal('william')
    expect(settings.second.one).to.equal(false)
    expect(settings.down.the.rabbit.hole).to.equal('Alice')
  })
})

