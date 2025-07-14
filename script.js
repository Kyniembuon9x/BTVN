
let students = [];


students.push("An", "Bình", "Chi");


const indexBinh = students.indexOf("Bình");
if (indexBinh !== -1) {
    students.splice(indexBinh, 1);
}

students.unshift("Dũng");

console.log("Danh sách học sinh cuối cùng:", students);
