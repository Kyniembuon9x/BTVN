let students = [];
let editingIndex = -1;

function renderTable() {
  const table = document.getElementById('studentTable');
  table.innerHTML = '';

  students.forEach((student, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.className}</td>
        <td>
          <button onclick="editStudent(${index})">Sửa</button>
          <button onclick="deleteStudent(${index})">Xoá</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function addOrUpdateStudent() {
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const className = document.getElementById('class').value.trim();

  if (!name || !age || !className) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const student = { name, age, className };

  if (editingIndex === -1) {
    students.push(student);
  } else {
    students[editingIndex] = student;
    editingIndex = -1;
  }

  clearForm();
  renderTable();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById('name').value = student.name;
  document.getElementById('age').value = student.age;
  document.getElementById('class').value = student.className;
  editingIndex = index;
}

function deleteStudent(index) {
  if (confirm("Bạn có chắc muốn xoá sinh viên này?")) {
    students.splice(index, 1);
    renderTable();
  }
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('class').value = '';
}
