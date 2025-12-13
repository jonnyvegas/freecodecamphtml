function sumPrimes(num)
{
  if(num < 2)
  {
    return 0;
  }
  if(num === 2)
  {
    return 2;
  }
  // from num to 2, see if it is divisible by all smaller nums.
  // e.g., 6 divisible by 5,4,3,2, etc.
  
  let sum = 0;
  while(num > 1)
  {
    //console.log(`current num: ${num}`);
    if(isPrime(num))
    {
      //console.log(`${num} is prime`);
      sum += num;
    }
    num--;
  }
  console.log(sum);
  return sum;
}

function isPrime(num)
{
  if(num <= 2)
  {
    return true;
  }
  
  let count = num - 1;
  while(count > 1)
  {
    if(num % count === 0)
      return false;
    count--;
  }
  return true;
}

sumPrimes(10);