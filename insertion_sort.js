'use strict';

const A = [5, 2, 4, 6, 1, 3];
let n = A.length;
let j;

// j = 정렬할 값의 인덱스 , key = 정렬할 값, i = 정렬할 값 앞의 인덱스
for (j = 1; j < n; ++j) {
  let key = A[j];
  // A[j]를 정렬된 배열 A[1..j - 1]에 삽입한다
  let i = j - 1;
  while (i > -1 && A[i] > key) {
    // key값과 그 앞의 값 비교 후 정렬
    //
    A[i + 1] = A[i];
    i = i - 1;
    A[i + 1] = key;
  }
}

console.log(A);
