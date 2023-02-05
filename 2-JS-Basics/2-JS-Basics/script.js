//Lecture: Variables
/*
var name = 'Snork';
console.log(name);

var lastName = 'Maiden';
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


//Lecture: Variables 2
/*
var name = 'Snork';
var age = 28;
console.log(name + age);
*/

//Lecture: Operators
/*
var now = 2017;
var birthYear = now - 28;
birthYear = now - 28 * 2;
console.log(birthYear);

var ageSnork = 28;
var ageMoomintroll = 27;
ageSnork = (3 + 5) * 4 - 4;
console.log(ageSnork);
*/

//Lecture: if/else statements
/*
var name = 'Snork';
var age = 28;
var isMarried = 'yes';

if (isMarried === 'Yes') {
    console.log(name + ' is married.');
} else {
    console.log(name + ' will get married soon. :)');   
}
isMarried = true;

if (isMarried) {
    console.log('Yes');
} else {
    console.log('No');
}

if (23 == '23') {
    console.log('Something to print...');
}
*/

/*
var age = 28;

if (age < 20) {
        console.log('Snork is a teenager.');   
} else if (age >= 20 && age < 30) {
    console.log('Snork is a young lady.');
} else {
    console.log('Snork is a lady.');
}

var job = 'teacher';
job = prompt('What does Snork do?');

switch (job) {
    case 'teacher':
        console.log('Snork teaches kids.');
        break;
    case 'driver':
        console.log('Snork drives a cab.');
        break;
    case 'cop':
        console.log('Snork fights crime.');
        break;
    default:
        console.log('Snork does something else.');
}
*/

//Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageSnork = calculateAge(1989);
var ageMoomintroll = calculateAge(1990);
var ageLittleMy = calculateAge(1996);

/*
console.log(ageSnork);
console.log(ageMoomintroll);
console.log(ageLittleMy);
*/

/*
function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');        
    } else {
        console.log(name + ' has already retired.');
    }
}

yearsUntilRetirement('Snork', 1989);
yearsUntilRetirement('Moomintroll', 1990);
yearsUntilRetirement('LittleMy', 1952);
*/

//Lecture: Arrays
/*
var names = ['Snork', 'Moomintroll', 'LittleMy'];
var years = new Array(1989, 1990, 1996);

console.log(names[2]);
names [1] = 'Teemu';
console.log(names);

var Snork = ['Snork', 'Maiden', 1989, 'programmer', false];

Snork.push('blue');
Snork.unshift('Ms.');
Snork.pop();
Snork.shift();

console.log(Snork);


if (Snork.indexOf('student') === -1) {
    console.log('Snork is NOT a student.');
}
*/

//Lecture: Objects
/*
var Snork = {
    name: 'Snork',
    lastName: 'Maiden',
    yearOfBirth: 1989,
    job: 'student',
    isMarried: false,
}

console.log(Snork.isMarried);
console.log(Snork['lastName']);

var xyz = 'job';
console.log(Snork[xyz]);

Snork.lastName = 'Maiden';
Snork['job'] = 'programmer';

console.log(Snork);

var Moomintroll = new Object();
Moomintroll.name = 'Moomintroll';
Moomintroll.lastname = 'Moomin';
Moomintroll['yearOfBirth'] = 1990;
Moomintroll['job']= 'worker';
Moomintroll['isMarried'] = true;

console.log(Moomintroll);
*/

//Lecture: Objects
//v1.0
/*
var Snork = {
    name: 'Snork',
    lastName: 'Maiden',
    yearOfBirth: 1989,
    job: 'student',
    isMarried: false,
    famiMaiden: ['Moomintroll', 'Snufkin', 'LittleMy'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
};

//console.log(Snork);
//console.log(Snork.famiMaiden);
//console.log(Snork.famiMaiden[2]);
//console.log(Snork.calculateAge(1988));

console.log(Snork.calculateAge());                  

var age = Snork.calculateAge();
Snork.age = age;
console.log(Snork);
*/

//v2.0
/*
var Snork = {
    name: 'Snork',
    lastName: 'Maiden',
    job: 'student',
    yearOfBirth: 1989,
    isMarried: false,
    famiMaiden: ['Moomintroll', 'Snufkin', 'LittleMy'],
    calculateAge: function () {
        this.age = 2017 - Snork.yearOfBirth;
    }
};

Snork.calculateAge();
console.log(Snork);
*/

//Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var animals = ['lion', 'tiger', 'leopard', 'wolf', 'horse'];
for (i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
*/

//Lecture: Objects
/*
var Snork = {
    name: 'Snork',
    lastName: 'Maiden',
    yearOfBirth: 1989,
    job: 'student',
    isMarried: false,
};

console.log(Snork.lastName);
console.log(Snork['job']);

var xyz ='yearOfBirth';
console.log(Snork[xyz]);

Snork.lastName = 'Maiden';
Snork['job'] = 'programmer';

console.log(Snork);

var Moomintroll = new Object();
Moomintroll.name = 'Moomintroll';
Moomintroll.lastName = 'Moomin';
Moomintroll['yearOfBirth'] = 1990;
Moomintroll['job'] = 'worker';
Moomintroll['isMarried'] = true;

console.log(Moomintroll);
*/

//Lecture: Objects and Methods
/*
var Snork = {
    name: 'Snork',
    lastName: 'Maiden',
    yearOfBirth: 1989,
    job: 'student',
    isMarried: false,
    famiMaiden: ['Moomintroll', 'Snufkin', 'LittleMy', 'Nipsu'],
    calculateAge: function () {
        return 2017 - this.yearOfBirth;
    }
};

console.log(Snork.calculateAge());
*/

//Lecture: Loops and Iteration
/*
for (i = 0; i <= 10; i++) {
    console.log(i);
}

var names = ['Snork', 'Moomintroll', 'Snufkin', 'LittleMy', 'Nipsu'];

//for loops
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/

//while loops
/*
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
};


for (i = 0; i <= 5; i++) {
    console.log(i);
};

for (i = 0; i <= 5; i++) {
    console.log(i);
    if ( i === 3) {
        break;
    }
};

for (i = 0; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        continue;
    }
};
*/

/*
var years = ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002'];
var ages = [];

for (var i = 0; i < years.length; i++) {
    ages[i] = 2018 - years[i];
    console.log(ages[i]);
};

for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is full age.');
    } else {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT full age.');    
    }
};
*/


/*
function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    };

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT full age.');    
            fullAges.push(false); 
        }
    }
    
    return fullAges;
}

var years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*/