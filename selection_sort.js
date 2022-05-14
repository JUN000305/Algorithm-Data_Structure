'use strict';

const A = [5, 4, 8, 1, 9, 3];
const n = A.length;
let i;
let j;
let min;

for (i = 0; i < n - 1; ++i) {
  min = i;
  for (j = i + 1; j < n; ++j) {
    if (A[min] > A[j]) {
      min = j;
    }
  }
  let temp = A[min];
  A[min] = A[i];
  A[i] = temp;
}

console.log(A);
