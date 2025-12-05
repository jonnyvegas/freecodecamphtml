let num = 5;

function factorialCalculator(inNum)
{
  let result = 1;
  let count = inNum;
  // don't count 1 because it is already included.
  while (count > 1)
  {
    result *= count;
    count--;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);