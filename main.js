/*

//การประกาศตัวแปร 

console.log() คือตัวแสดงผล

// string number boolen object array
//let firstname = 'john';
//const idcard = '1234';

//console.log(firstname)
//number
//let age = 25;
//let hight = 5.9;

//boolen
//let isMarried = false;
//firstname = 'xxx';
//idcard = '5678';
//let firstname = 'johnnnnn'
//console.log('my name is',firstname,'and I am', age , 'years old.');


เรื่อง
บวก +
ลบ -
คูณ * 
หาร/
 /
หารหาเศษ mod %
ใส่ '' เป็น string
น้อยกว่า < 
มากกว่า > 
มากกว่าเท่ากับ >=
น้อยกว่าเท่ากับ <=
เท่ากับ ==
ไม่เท่ากับ !=

let number1 = '5';
let number2 = '3';

let condition = number1 < number2; //boolen ค่าที่ได้จะเป็น true or false
console.log('result of condition is',condition);
*/
/*
let number1 = 5;
let number2 = 5;

//if - else condition

if (number1 != number2) {
    console.log('this is if');
} else if (number1 == number2) {
    console.log('this is else if');
} else {
    console.log('this is else');
}
*/

/*
เรื่อง
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
*/ 
/*
let score = prompt('Enter your score :'); //prompt ช่องกรอก
console.log('Your score is '+ score);
//if - else condition
//เงื่อนไข if else
if (score >= 80) {
    console.log('You are grade A');
} else if (score >= 70) { //false
    console.log('You are grade B');
} else if (score >= 60) { //true
    console.log('You are grade C');
} else if (score >= 50) {
    console.log('You are grade D');
} else {
    console.log('You are grade F')
}
*/


 /*
 เรื่อง
 && และ
 || หรือ
 ! not หรือ ไม่
 */ 
/*
 let number1 = 5;
 let number2 = 8;
// true && false = false
// || ถ้าเป็นจริงเงื่อนไขนึงจะเป็น true
 let condition = number1 >= 3 || number2 >= 10;
 console.log('result of condition',condition);

 let age = 30;
 let gender = 'male'

 // true && true = true
 if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
 }
*/
/*
let number = 25;

if (!(number % 2 == 0)) {
    console.log('Your are even number');
} 
*/

/*
เรื่อง
while loop
for
*/
/*
let counter = 0;

while (counter < 10) {
    console.log('while loop');
    counter = counter + 1;
    counter +=1;
    counter++
}

for (let counter = 0; counter < 10; counter = counter +1) {
    console.log('for loop');
}
*/

/*
เรื่อง Array
*/
/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [20, 30, 40, 50];
console.log('new age', ages[2]);
console.log('age list', ages);

//1.แทนที่ค่าใน array
ages = [45,55];
console.log('new age',ages);

//2. ต่อ array

ages.push(55);
console.log('new age',ages);
*/
/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [30,35,40,45,50];

if (!ages.includes(40)) {
    console.log('you have to be 40');
}
*/
/*
let ages = [90,60,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let names_list = ['John','Bob','Alice','Zack'];
names_list.push('Mike');
console.log(names_list.length);
console.log(names_list[0]); //เรียกดูค่าใน array
console.log(names_list[1]);
console.log(names_list[2]);


for(let index = 0; index < names_list.length; index++) {
    console.log('name list',names_list[index]);
}
*/
/*
let student = [{
    name: 'zz',
    age: 90,
    grade:'A'
},{
    name: 'aa',
    age: 66,
    grade:'B'
}];

/*student.push = ({// การเพิ่มข้อมูลใน array
    name: 'QQ',
    age: 90,
    grade:'Q'
})*/

/*student.pop() // การลบข้อมูลใน array

for (let index = 0; index < student.length; index++) {
    console.log('Student number', (index + 1));
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
} 
*/
/*
console.log('name',student.name);
console.log('age',student);

let age2 = 90;
let name2 = 'zz';
let grade2 = 90;
*/
/*
//เรื่อง object + array
let score1 = 50;
let score2 = 90;
let grades = ''
//ประกาศ function ชื่อ calculateGrade ที่มี parameter ชื่อเป็น scores
function calculateGrade(score) {
    if (score >= 80) {
        grades = 'A';
    } else if (score >= 70) {
        grades = 'B';
    } else if (score >= 60) {
        grades = 'C';
    } else if (score >= 50) {
        grades = 'D';
    } else {
        grades = 'F';
    }
    return grades;
}
//Arrow function
function calculateGrade = ((score) => {
    if (score >= 80) {
        grades = 'A';
    } else if (score >= 70) {
        grades = 'B';
    } else if (score >= 60) {
        grades = 'C';
    } else if (score >= 50) {
        grades = 'D';
    } else {
        grades = 'F';
    }
    return grades;
})

let student1 = calculateGrade(score1)
let student2 = calculateGrade(score2)
console.log('grade:',student1,student2)
*/

//Array
/*
let scores = [10,20,30,40,50,60,70,80,90,100];
for (let index = 0; index < scores.length; index++) {
    console.log(scores[index]);
}
/*
scores[0] = scores[0] * 2;
scores[1] = scores[1] * 2;
scores[2] = scores[2] * 2;
scores[3] = scores[3] * 2;
scores[4] = scores[4] * 2;
*/
/*scores = scores.map((s) => {
    return s * 2;
});


scores.forEach((s) => {
    console.log('new score:',s)
})/*


let scores = [10,20,30,40];
//let newScores = []

// for loop เช็คค่าใน array ว่ามีค่ามากกว่าหรือเท่ากับ 30 หรือไม่ถ้ามากกว่าดึงมากแสดงค่าใน array ใหม่
/*for (let index = 0; index < scores.length; index++) {
    console.log('Score',scores[index]);
    /*
    if (scores[index] >= 30) {
        newScores.push(scores[index]);
    }*/
//}
// filter ใช้เช็คข้อมูลใน Array
/*
let newScores = scores.filter((s) => {
    /*if (s >= 30) { โค้ดแบบเต็ม
        return true;
    } else {
        return false;
    }*/
   /*return s >= 20; //โค้ดแบบย่อ
})
newScores.forEach((ns) => {
    console.log('New score:',ns);
})
*/
//เรื่อง object function

let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },
    {
        name: 'Jane',
        score: 75,
        grade: 'B'
    },
    {
        name: 'Jim',
        score:60,
        grade: 'C'
    }
]
let student = students.find((s) => {
    if (s.name == 'Jane') {
        return true;
    }
})

let doubleScores_student = students.map((s) => {
    s.score = s.score * 2;
})

let hightscore_student = students.filter((s) => {
    if (s.score > 80)
        return true;
})
console.log('student:',student);
console.log('hightscore_student:',hightscore_student);
