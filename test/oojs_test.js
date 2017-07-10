var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var oojs = fs.readFileSync("oojs.js","utf8")


describe('OOJS #1', function() {
  try {
    var Playlist = require("../oojs.js").Playlist
  }
  catch(e) {
    console.log(e)
  }
  it('Playlist is a class', function() {
    expect(Playlist).to.be.a('function')
  })
  it('Playlist\'s constructor sets a title and songs property', function() {
    var testPlaylist = new Playlist('test')
    expect(testPlaylist.title).to.be.a('string')
    expect(testPlaylist.songs).to.be.an('array')
    expect(testPlaylist.addSong).to.be.a('function')
  })
  it('Playlist has an addSong method', function() {
    var testPlaylist = new Playlist('test')
    expect(testPlaylist.addSong).to.be.a('function')
  })
})

describe('OOJS #2', function() {
  try {
    eval(oojs)
  }
  catch(e) {
    console.log(e)
  }
  it('myPlaylist is an instance of Playlist', function() {
    expect(myPlaylist.__proto__.constructor.name).to.equal("Playlist")
  })
  it('myPlaylist has properties', function() {
    expect(myPlaylist.title).to.be.a('string')
    expect(myPlaylist.songs).to.be.an('array')
  })
  it('myPlaylist has at least one song', function() {
    expect(myPlaylist.songs.length).to.be.greaterThan(0)
  })
})
