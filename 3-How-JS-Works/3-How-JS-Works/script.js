// Lecture: Hoisting
// Functions
/*
calculateAge(1989);
function calculateAge(year){
    console.log(2018 - year);
}

var retirement = function(year) {
    console.log(65 - (2018 - year));
}
retirement(1989);

// Variables
var age = 29;
function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/


// Lecture: Scoping
// First scoping example
/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


// Lecture: The this keyword
//console.log(this);
/*
var SnorkMaiden = {
    name: 'SnorkMaiden',
    yearOfBirth: 1989,
    calculateAge: function () {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        
    }   
};
SnorkMaiden.calculateAge();
*/

/*
var moomin = {
    name: 'Moomintroll',
    yearOfBirth: 1990,
};
moomin.calculateAge = SnorkMaiden.calculateAge;
moomin.calculateAge();
*/