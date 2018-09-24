var should = require("chai").should();
var expect = require("chai").expect;
var fs = require("fs");
var oojs = fs.readFileSync("oojs.js", "utf8");

describe("OOJS #1", function() {
  try {
    var Student = require("../oojs.js").Student;
  } catch (e) {
    console.log(e);
  }
  it("Student is a class", function() {
    expect(Student).to.be.a("function");
  });
  it("Student's constructor sets a title and songs property", function() {
    var testStudent = new Student("test");
    expect(testStudent.name).to.be.a("string");
    expect(testStudent.grade).to.be.an("number");
    expect(testStudent.graduate).to.be.a("function");
  });
  it("Student has an graduate method", function() {
    var testStudent = new Student("test", "B-");
    expect(testStudent.graduate).to.be.a("function");
  });
});

describe("OOJS #2", function() {
  try {
    eval(oojs);
  } catch (e) {
    console.log(e);
  }
  it("myStudent is an instance of Student", function() {
    expect(myStudent.__proto__.constructor.name).to.equal("Student");
  });
  it("myStudent has properties", function() {
    expect(myStudent.name).to.be.a("string");
    expect(myStudent.grade).to.be.an("number");
  });
  it("myStudent has an A+", function() {
    expect(myStudent.grade).to.equal("A+");
  });
});
