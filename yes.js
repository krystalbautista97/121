
let studentGrade = [
    "jim|25",
    "sue|32",
    "mary|34",
    "ann|22",
    "ted|28",
    "frank|15",
    "lisa|19",
    "mike|30",
    "ahn|26",
    "vishaya|27"
  ];
let sum = 0;
let min = Infinity;
let max = -Infinity;
 
for (let i = 0; i < studentGrade.length; i++) {
    let student = studentGrade[i].split("|")[0];
    let capStudent = student.charAt(0).toUpperCase()+student.slice(1);
    let grade = parseInt(studentGrade[i].split("|")[1]);
    console.log(`Student: ${capStudent}, Score: ${grade}`);
    sum += grade;
    min = Math.min(min, grade);
    max = Math.max(max, grade);
}
  let avg = sum / studentGrade.length

console.log(`Max grade: ${max}, Average grade: ${avg}, Min grade: ${min}, Total students: ${studentGrade.length}`);





