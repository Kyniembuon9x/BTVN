
const title = document.getElementById("main-title");
title.innerText = "Chào mừng bạn đến với khóa học JavaScript!";

const desc = document.querySelector(".description");
desc.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";

const greetBtn = document.getElementById("greet-btn");
const inputName = document.getElementById("student-name");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  const name = inputName.value.trim();
  if (name) {
    greeting.innerText = `Xin chào, ${name}!`;
    greeting.style.color = "green";
  } else {
    greeting.innerText = "Vui lòng nhập tên!";
    greeting.style.color = "red";
  }
});
