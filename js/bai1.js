let a = prompt("Nhap vao so a >0:");

let b = prompt("Nhap vao so b (b>a):");
let valueA = parseInt(a);
let valueB = parseInt(b);
while (valueA > valueB || valueA<0) {
  if(valueA>valueB)
  {
    valueB = parseInt(prompt("Nhap lai so b>a"));
  }
  if(valueA<0)
  {
    valueA=parseInt(prompt("Nhap lai so a > 0"));
  }
}

function ktSNT(n) {
  if (n < 2) {
    return false;
  } 
  for(let i=2;i<n-1;i++)
  {
    if(n%i===0)
    {
        return false;
    }
  }
  return true;
}

function tongSNT(a, b) {
  let sum = 0;
  for (var i = a; i < b; i++) {
    if (ktSNT(i)) {
      sum += i;
    }
  }
  return sum;
}



let h2=document.querySelector('.sumSNT h2');

h2.innerHTML=`Tổng các số nguyên tố từ đoạn [${valueA} - ${valueB}]`;

let h1=document.querySelector('.sumSNT h1');

h1.innerHTML=`Tổng bằng: ${tongSNT(valueA,valueB)}`;
