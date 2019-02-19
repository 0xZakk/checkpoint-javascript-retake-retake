// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Student` class with the following properties:
// - a `name` property for their first and last name
// - a `course` property for the class they're a student in
// - a `grade` property for their grade in the class
// - a `graduate` method that sets the `grade` property to the string `A+`
// Type your solution immediately below this line:

class Student {
  constructor(name, course, grade) {
    (this.name = name), (this.course = course), (this.grade = grade);
  }
  graduate() {
    console.log("get an A+");
  }
}

// #2: Create an instance of the Student class and set it to a variable called `myStudent`
// Call the instance's `graduate` method to set the student's grade to an 'A+'
// Type your solution immediately below this line:

var myStudent = new Student(name, course, grade);
graduate();

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (typeof Student !== "undefined") {
  module.exports = {
    Student
  };
}
