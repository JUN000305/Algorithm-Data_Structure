'use strict';

const A = [5, 9, 3, 1, 2, 8, 4];
let n = A.length;
let i;
let j;

for (i = 0; i < n - 1; i++) {
  for (j = 0; j < n - i - 1; j++) {
    if (A[j] > A[j + 1]) {
      //Swap  
      let temp = A[j]; 
      A[j] = A[j + 1];
      A[j + 1] = temp;
    }
  }
}

console.log(A);
