let n = parseInt(prompt("Nhập vào 1 số nguyên từ 1 - 10"));

while (n < 1 || n > 10) {
  n = parseInt(prompt("Nhập lai 1 so nguyen tu 1 - 10"));
}
let triangle = document.getElementById("triagle");
triangle.textContent = '';


function numberOneTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let start = "*".repeat(i);

    let sum = start + space + '\n';

    triangle.textContent += sum;
  }
}

numberOneTriangle(n);


