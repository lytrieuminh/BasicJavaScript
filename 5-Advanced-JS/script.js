//Lecture: Function constructors
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
 console.log(2018 - this.yearOfBirth);   
};

Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


//Lecture: Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log (2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' },
})
*/


//Lecture: Primitives vs Objects
// Objects
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26,
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
};

change(age, obj);

console.log(age);
console.log(obj.city);
*/


//Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}
*/


//Lecture: Dunctions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/


//Lecture: IIFE
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) (5);
*/


//Lecture: Closures
/*
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/


/*
function interviewQuestion (job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('SnorkMaiden');
interviewQuestion('tester')('Moomintroll');
*/


//Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + '. ' + ' I\'m a ' + this.job + '. ' + 'I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + '. ' + 'I\'m a ' + this.job + '. ' + 'I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var LittleMy = {
    name: 'LittleMy',
    age: 35,
    job: 'designer',
};

var SnorkMaiden = {
    name: 'SnorkMaiden',
    age: 29,
    job: 'tester',
};

var Moomintroll = {
    name: 'Moomintroll',
    age: 28,
    job: 'developer',
};

john.presentation('formal', 'morning');

john.presentation.call(LittleMy, 'friendly', 'morning');
john.presentation.call(SnorkMaiden, 'formal', 'afternoon');
john.presentation.call(Moomintroll, 'friendly', 'evening');

//john.presentation.apply(LittleMy, ['friendly', 'morning']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var LittleMyFriendly = john.presentation.bind(LittleMy, 'formal');
LittleMyFriendly('morning');
LittleMyFriendly('night');
*/


//Coding challenge 4:
/*
(function() {
    function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct answer!');
    } else {
        console.log('Wrong answer. Try again :)')
    }
}

var q1 = new Question('Is JavaScipt the coolest programming language in the world?', ['Yes', 'No'], 0);
var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3];
var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));
questions[n].checkAnswer(answer);
})();
*/