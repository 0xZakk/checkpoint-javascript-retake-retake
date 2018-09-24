var should = require("chai").should();
var expect = require("chai").expect;
var fs = require("fs");
var hof = fs.readFileSync("hof.js", "utf8");

describe("HOF #1", function() {
  let section = hof.slice(0, hof.indexOf("// #2"));
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("characterNames should be an array", function() {
    expect(characterNames).to.be.an("array");
  });
  it(".map should be called on `ghostBusters`", function() {
    expect(hof).to.include("ghostBusters.map");
  });
  it("characterNames should contain the names of each person in the ghostBusters array", function() {
    let names = [
      "Abby Yates",
      "Erin Gilbert",
      "Jillian Holtzman",
      "Patty Tolan"
    ];
    expect(characterNames).to.deep.equal(names);
  });
});

describe("HOF #2", function() {
  let section =
    hof.slice(0, hof.indexOf("// #1")) + hof.slice(hof.indexOf("// #2"));
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("superBusters is an array", function() {
    expect(superBusters).to.be.an("array");
  });
  it(".filter should be called on `ghostBusters`", function() {
    expect(hof).to.include("ghostBusters.filter");
  });
  it("superBusters only contains persons who have 10 or more KOs", function() {
    let expectedPeople = ghostBusters.filter(i => i.ghostKOs >= 10);
    expect(superBusters).to.deep.equal(expectedPeople);
  });
});
