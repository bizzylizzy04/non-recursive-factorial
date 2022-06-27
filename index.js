// non recursive factorial

// fact(3) => 3! = 3 * 2 * 1
// fact(4) => 4! = 4 * 3 * 2 * 1
// fact(5) => 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!

// n = n * fact(n-1);

function fact(num){
  if(num == 0 || num == 1){
    return 1;
  }
  for(let i = num - 1; i >= 1; i--){
    num = num * i;
  }
  return num;
}
console.log(fact(5), 'This is the output YEAH');

// recursive factorial
function factorial(num){
  if(num == 0 || num == 1){
    return 1;
  }
  return num * factorial(num -1);
}
console.log(factorial(5));
