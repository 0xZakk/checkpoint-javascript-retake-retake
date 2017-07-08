var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var oojs = fs.readFileSync("oojs.js","utf8")
var Playlist = require("../oojs.js").Playlist

describe('OOJS #1', function() {
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
  it('myPlaylist is an instance of Playlist', function() {
    eval(oojs)
    expect(myPlaylist.__proto__.constructor.name).to.equal("Playlist")
  })
  it('myPlaylist has properties', function() {
    eval(oojs)
    expect(myPlaylist.title).to.be.a('string')
    expect(myPlaylist.songs).to.be.an('array')
  })
  it('myPlaylist has at least one song', function() {
    eval(oojs)
    expect(myPlaylist.songs.length).to.be.greaterThan(0)
  })
})
