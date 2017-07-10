var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var fundamentals = fs.readFileSync("fundamentals.js","utf8")

describe('Fundamentals #1', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #1'),
    fundamentals.indexOf('// #2')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('colors is an array', function() {
    expect(colors).to.be.an('array')
  })
  it('colors contains three colors', function() {
    expect(colors.length).to.equal(3)
  })
})

describe('Fundamentals #2', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #1'),
    fundamentals.indexOf('// #3')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('last is a string', function() {
    expect(last).to.be.a('string')
  })
  it('last is equal to the last item in colors', function() {
    expect(last).to.equal(colors[2])
  })
})

describe('Fundamentals #3', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #3'),
    fundamentals.indexOf('// #4')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('favoriteColors is defined', function() {
    expect(favoriteColors).to.be.not.undefined
  })
  it('favoriteColors is an array', function() {
    expect(favoriteColors).to.be.an('array')
  })
})

describe('Fundamentals #4', function() {
  let section =
    fundamentals.slice(
      fundamentals.indexOf('// #1'),
      fundamentals.indexOf('// #2')
    )
    +
    fundamentals.slice(
      fundamentals.indexOf('// #3'),
      fundamentals.indexOf('// #5')
    )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('favoriteColors contains three colors', function() {
    expect(favoriteColors.length).to.equal(3)
  })
  it('favoriteColors contains the same values as colors', function() {
    expect(
      favoriteColors.reduce((a, b) => a + b)
    ).to.equal(
      colors.reduce((a, b) => a + b)
    )
  })
})

describe('Fundamentals #5', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #5'),
    fundamentals.indexOf('// #6')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('instructor is an object', function() {
    expect(instructor).to.be.an('object')
  })
  it('instructor has three key-value pairs', function() {
    expect(Object.keys(instructor).length).to.be.greaterThan(2)
  })
})

describe('Fundamentals #6', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #5')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('instructor has a facial-hair property', function() {
    expect(Object.keys(instructor)).to.include('facial-hair')
  })
  it('facial-hair has a boolean value', function() {
    expect(instructor['facial-hair']).to.be.a('boolean')
  })
})
