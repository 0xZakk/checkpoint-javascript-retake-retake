var should = require("chai").should();
var expect = require("chai").expect;
var fs = require("fs");
var fundamentals = fs.readFileSync("fundamentals.js", "utf8");

describe("Fundamentals #1", function() {
  let section = fundamentals.slice(
    fundamentals.indexOf("// #1"),
    fundamentals.indexOf("// #2")
  );
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("superHeroes is an array", function() {
    expect(superHeroes).to.be.an("array");
  });
  it("superHeroes contains three strings", function() {
    expect(superHeroes.length).to.equal(3);
    expect(superHeroes.every(hero => hero.constructor === String)).to.equal(
      true
    );
  });
});

describe("Fundamentals #2", function() {
  let section = fundamentals.slice(
    fundamentals.indexOf("// #1"),
    fundamentals.indexOf("// #3")
  );
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("last is a string", function() {
    expect(last).to.be.a("string");
  });
  it("last is equal to the last item in superHeroes", function() {
    expect(last).to.equal(superHeroes[2]);
  });
});

describe("Fundamentals #3", function() {
  let section = fundamentals.slice(
    fundamentals.indexOf("// #3"),
    fundamentals.indexOf("// #4")
  );
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("favoriteHeroes is defined", function() {
    expect(favoriteHeroes).to.be.not.undefined;
  });
  it("favoriteHeroes is an array", function() {
    expect(favoriteHeroes).to.be.an("array");
  });
});

describe("Fundamentals #4", function() {
  let section =
    fundamentals.slice(
      fundamentals.indexOf("// #1"),
      fundamentals.indexOf("// #2")
    ) +
    fundamentals.slice(
      fundamentals.indexOf("// #3"),
      fundamentals.indexOf("// #5")
    );
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("favoriteHeroes contains three heress", function() {
    expect(favoriteHeroes.length).to.equal(3);
  });
  it("favoriteHeroes contains the same values as heroes", function() {
    expect(favoriteHeroes.reduce((a, b) => a + b)).to.equal(
      superHeroes.reduce((a, b) => a + b)
    );
  });
});

describe("Fundamentals #5", function() {
  let section = fundamentals.slice(
    fundamentals.indexOf("// #5"),
    fundamentals.indexOf("// #6")
  );
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("batman is an object", function() {
    expect(batman).to.be.an("object");
  });
  it("batman has three key-value pairs", function() {
    expect(Object.keys(batman)).to.have.lengthOf(3);
  });
  it("batman does not have a 'has-office-hours' property", function() {
    expect(batman).to.not.have.any.keys("has-office-hours");
  });
});

describe("Fundamentals #6", function() {
  let section = fundamentals.slice(fundamentals.indexOf("// #5"));
  try {
    eval(section);
  } catch (e) {
    console.log(e);
  }
  it("batman has four key-value pairs", function() {
    expect(Object.keys(batman).length).to.be.equal(4);
  });
  it("batman has a has-secret-lair property", function() {
    expect(batman).to.have.property("has-secret-lair");
  });
  it("has-secret-lair has a boolean value", function() {
    expect(batman)
      .property("has-secret-lair")
      .to.be.a("boolean");
  });
});
