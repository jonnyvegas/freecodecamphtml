function sumFibs(num)
{
  let prev = 0;
  let curr = 1;
  let next = 0;
  let sum = 0;
  while(next <= num)
  {
    prev = curr;
    curr = next;
    next = prev + curr;
    if(next % 2 !== 0)
    {
      if(next <= num)
      {
        sum += next;
        console.log(sum);
      }
    }
    
  }
  return sum;
}

sumFibs(75025);