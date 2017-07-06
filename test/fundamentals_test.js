var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var fundamentals = fs.readFileSync("script.js","utf8")

describe('Fundamentals #1', function() {
  it('colors is defined', function() {
    eval(fundamentals)
    expect(colors).to.be.not.undefined
  })
  it('colors is an array', function() {
    eval(fundamentals)
    expect(colors).to.be.an('array')
  })
})
