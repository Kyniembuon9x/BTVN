const students = [
  { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
  { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
  { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
  { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
  { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];

console.log("Tên và tuổi của từng học sinh:");
students.forEach(student => {
  console.log(`Tên: ${student.name}, Tuổi: ${student.age}`);
});

const studentsWithAvg = students.map(student => {
  const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  return {
    name: student.name,
    average: avgScore
  };
});
console.log("\nTên và điểm trung bình:");
console.log(studentsWithAvg);


const goodStudents = studentsWithAvg.filter(student => student.average >= 8);
console.log("\nHọc sinh có điểm trung bình >= 8:");
console.log(goodStudents);


const firstStudent17 = students.find(student => student.age >= 17);
console.log("\nHọc sinh đầu tiên có tuổi >= 17:");
console.log(firstStudent17);


const hasLowScore = studentsWithAvg.some(student => student.average < 5);
console.log("\nCó học sinh nào điểm trung bình dưới 5 không?");
console.log(hasLowScore);

const allAbove15 = students.every(student => student.age >= 15);
console.log("\nTất cả học sinh có tuổi >= 15?");
console.log(allAbove15);

const classAverage =
  studentsWithAvg.reduce((sum, student) => sum + student.average, 0) / studentsWithAvg.length;
console.log("\nĐiểm trung bình toàn lớp:");
console.log(classAverage.toFixed(2)); // làm tròn 2 chữ số
