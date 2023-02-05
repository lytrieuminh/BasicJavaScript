/*
function Person (name, age) {
	this.name = name;
    this.age = age;
    
    this.describe = function () {
    	return this.name + ", " + this.age + " years old";
    }
}

var minh = new Person("Minh", 28);
var arto = new Person("Arto", 27);

console.log(minh.describe());
console.log(arto.describe());
*/

/*
var person = {
    firstName : "John",
    lastName : "Smith",
    age : 23
};

function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.

var boundPrintFullName = printFullName.bind(person);
var boundPrintDetails = printDetails.bind(person);

boundPrintFullName();
boundPrintDetails();
*/

/*
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
	console.log(this.name + " is now teaching " + subject);
}

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
*/