// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 6.4.0)
  let L = Math.max.apply(Math, A);
  let P_max = Math.max.apply(Math, B);

  let fib = Array.apply(null, Array(L + 2)).map(Number.prototype.valueOf, 0);
  fib[1] = 1;
  for (let i = 2; i < L + 2; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) & ((1 << P_max) - 1);
  }
  let return_arr = Array.apply(null, Array(A.length)).map(
    Number.prototype.valueOf,
    0
  );

  for (var idx = 0; idx < A.length; idx++) {
    return_arr[idx] = fib[A[idx] + 1] & ((1 << B[idx]) - 1);
  }
  return return_arr;
}

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]));
