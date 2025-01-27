let students = [{
    name : 'john',
    score : 80,
    grade : 'A'
},{
    name : 'Jane',
    score : 75,
    grade : 'B'
},{
    name : 'Jim',
    score : 60,
    grade : 'C'
}
]
let student = students.find((s) => {
    if(s.name == 'Jane') {
        return true
    }
})
let doublescore_student = students.map((s)=>{
    s.score = s.score*2;
})
let hightscore_student = students.filter((s)=>{
    if(s.score > 80) {
        return true
    }
})
console.log("Student",student)
console.log("Hightscore_student",hightscore_student)
console.log("double_student",doublescore_student)