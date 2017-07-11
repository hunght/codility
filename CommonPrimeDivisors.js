// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
  // write your code in JavaScript (Node.js 6.4.0)
  let count = 0;
  for (let index = 0; index < N.length; index++) {
    let a = N[index];
    let b = M[index];
    if (isSameSet(a, b)) {
      count++;
    }
  }
  return count;
}

function isSameSet(a, b) {
   let gcd_value = gcd(a,b)
  return removeCommonPrimeDivisors(a,gcd_value) == 1 && removeCommonPrimeDivisors(b,gcd_value) == 1;
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function removeCommonPrimeDivisors(x, y) {
  while (x != 1) {
      let gcd_value = gcd(x,y)
      if (gcd_value == 1){
          break
      }
      x/=gcd_value
  }
  return x
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

console.log(solution([15, 75, 9], [75, 15, 15]));
