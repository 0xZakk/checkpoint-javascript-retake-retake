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
  it('foods is an array', function() {
    expect(foods).to.be.an('array')
  })
  it('foods contains three strings', function() {
    expect(foods.length).to.equal(3)
    expect(foods.every(food => food.constructor === String)).to.equal(true)
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
  it('last is equal to the last item in foods', function() {
    expect(last).to.equal(foods[2])
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
  it('favoriteFoods is defined', function() {
    expect(favoriteFoods).to.be.not.undefined
  })
  it('favoriteFoods is an array', function() {
    expect(favoriteFoods).to.be.an('array')
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
  it('favoriteFoods contains three foods', function() {
    expect(favoriteFoods.length).to.equal(3)
  })
  it('favoriteFoods contains the same values as foods', function() {
    expect(
      favoriteFoods.reduce((a, b) => a + b)
    ).to.equal(
      foods.reduce((a, b) => a + b)
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
    expect(Object.keys(instructor)).to.have.lengthOf(3)
  })
  it('instructor does not have a \'has-office-hours\' property', function() {
    expect(instructor).to.not.have.any.keys('has-office-hours')
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
  it('instructor has four key-value pairs', function() {
    expect(Object.keys(instructor).length).to.be.equal(4)
  })
  it('instructor has a has-office-hours property', function() {
    expect(instructor).to.have.property('has-office-hours')
  })
  it('has-office-hours has a boolean value', function() {
    expect(instructor).property('has-office-hours').to.be.a('boolean')
  })
})
