var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var hof = fs.readFileSync("hof.js","utf8")

describe('HOF #1', function() {
  let section = hof.slice(
    0,
    hof.indexOf('// #2')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('Array.map is used', function() {
    expect(hof.match(/map/g).length).to.equal(2)
  })
  it('peoplesAges is an array', function() {
    expect(peoplesAges).to.be.an('array')
  })
  it('peoplesAges contains the ages of persons from the people array', function() {
    let ages = [32, 34, 39]
    expect(
      peoplesAges.every((age, index) => {
        return age === ages[index]
      })
    ).to.equal(true)
  })
})

describe('HOF #2', function() {
  let section =
    hof.slice(
      0,
      hof.indexOf('// #1')
    )
    +
    hof.slice(
      hof.indexOf('// #2')
    )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('Array.filter is used', function() {
    expect(hof.match(/filter/g).length).to.equal(3)
  })
  it('peopleOlderThan35 is an array', function() {
    expect(peopleOlderThan35).to.be.an('array')
  })
  it('peopleOlderThan35 only contains person(s) older than 35', function() {
    expect(peopleOlderThan35.length).to.equal(1)
    expect(peopleOlderThan35[0]).to.equal(people[2])
  })
})
