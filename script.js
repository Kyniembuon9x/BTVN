
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`Số ${num} là số chẵn!`);
    } else {
      reject(`Lỗi: Số ${num} là số lẻ!`);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("number-input");
  const btn = document.getElementById("check-btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const value = parseInt(input.value.trim(), 10);

    if (isNaN(value)) {
      result.textContent = "Vui lòng nhập một số hợp lệ.";
      result.style.color = "red";
      return;
    }

    checkNumber(value)
      .then(message => {
        result.textContent = message;
        result.style.color = "green";
      })
      .catch(error => {
        result.textContent = error;
        result.style.color = "red";
      })
      .finally(() => {
        console.log("Kiểm tra hoàn tất.");
      });
  });
});
