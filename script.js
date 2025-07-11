const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskName = input.value.trim();
  if (taskName === "") {
    alert("Vui lòng nhập tên công việc!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskName;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xoá";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
});
