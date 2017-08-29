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
  it('peopleNames should be an array', function() {
    expect(peopleNames).to.be.an('array')
  })
  it('.map should be called on `people`', function() {
    expect(hof.match(/people\.map/g).length).to.be.at.least(1)
  })
  it('peopleNames should contain the names of each person in the people array', function() {
    let names = ["Layla", "Keanu", "Jasmine"]
    expect(
      peopleNames.every((name, index) => {
        return name === names[index]
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
    expect(hof.match(/people\.filter/g).length).to.equal(1)
  })
  it('polyglotPeople is an array', function() {
    expect(polyglotPeople).to.be.an('array')
  })
  it('polyglotPeople only contains persons who know multiple languages', function() {
    expect(polyglotPeople.length).to.equal(2)
    expect(polyglotPeople[0]).to.equal(people[0])
    expect(polyglotPeople[1]).to.equal(people[2])
  })
})
