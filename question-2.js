const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let scorePass = students.filter((student) => student.score > 50);
//console.log(scorePass);
scorePass = scorePass.map((each) => each.score*1.1)
//console.log(scorePass);
scorePass = scorePass.reduce((acc,cur) => acc+cur,0)
console.log("Total score is " + scorePass);



