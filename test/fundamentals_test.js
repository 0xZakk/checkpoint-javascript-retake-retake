var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var fundamentals = fs.readFileSync("fundamentals.js","utf8")

describe('Fundamentals #1', function() {
  it('colors is an array', function() {
    eval(fundamentals)
    expect(colors).to.be.an('array')
  })
  it('colors contains three colors', function() {
    eval(fundamentals)
    expect(colors.length).to.equal(3)
  })
})

describe('Fundamentals #2', function() {
  it('last is a string', function() {
    eval(fundamentals)
    expect(last).to.be.a('string')
  })
  it('last is equal to the last item in colors', function() {
    eval(fundamentals)
    expect(last).to.equal(colors[2])
  })
})

describe('Fundamentals #3', function() {
  it('favoriteColors is defined', function() {
    eval(fundamentals)
    expect(favoriteColors).to.be.not.undefined
  })
  it('favoriteColors is an array', function() {
    eval(fundamentals)
    expect(favoriteColors).to.be.an('array')
  })
})

describe('Fundamentals #4', function() {
  it('favoriteColors contains three colors', function() {
    eval(fundamentals)
    expect(favoriteColors.length).to.equal(3)
  })
  it('favoriteColors contains the same values as colors', function() {
    eval(fundamentals)
    expect(
      favoriteColors.reduce((a, b) => a + b)
    ).to.equal(
      colors.reduce((a, b) => a + b)
    )
  })
})

describe('Fundamentals #5', function() {
  it('instructor is an object', function() {
    eval(fundamentals)
    expect(instructor).to.be.an('object')
  })
  it('instructor has three key-value pairs', function() {
    eval(fundamentals)
    expect(Object.keys(instructor).length).to.be.greaterThan(2)
  })
})

describe('Fundamentals #6', function() {
  it('instructor has a facial-hair property', function() {
    eval(fundamentals)
    expect(Object.keys(instructor)).to.include('facial-hair')
  })
  it('facial-hair has a boolean value', function() {
    eval(fundamentals)
    expect(instructor['facial-hair']).to.be.a('boolean')
  })
})
