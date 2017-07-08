var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var hof = fs.readFileSync("hof.js","utf8")

describe('HOF #1', function() {
  it('Array.map is used', function() {
    expect(hof.includes('map')).to.equal(true)
  })
  it('peoplesAges is an array', function() {
    eval(hof)
    expect(peoplesAges).to.be.an('array')
  })
  it('peoplesAges contains the ages of persons from the people array', function() {
    eval(hof)
    let ages = [32, 34, 39]
    expect(
      peoplesAges.every((age, index) => {
        return age === ages[index]
      })
    ).to.equal(true)
  })
})

describe('HOF #2', function() {
  it('Array.filter is used', function() {
    expect(hof.includes('filter')).to.equal(true)
  })
  it('peopleOlderThan35 is an array', function() {
    eval(hof)
    expect(peopleOlderThan35).to.be.an('array')
  })
  it('peopleOlderThan35 only contains person(s) older than 35', function() {
    eval(hof)
    expect(peopleOlderThan35.length).to.equal(1)
    expect(peopleOlderThan35[0]).to.equal(people[2])
  })
})
