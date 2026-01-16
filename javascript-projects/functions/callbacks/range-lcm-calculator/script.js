const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

function smallestCommons(numArr)
{
  numArr.sort(compareNums);
  let newNums = [];
  let primeAnsArr = [];
  for(let i = numArr[0]; i <= numArr[1]; i++)
  {
    newNums.push(i);
  }
  let primesIdx = 0;
  let numTimes = 0;
  let maxTimes = 0;
  let answer = 1;
  while(!newNums.every(isAOne) && primesIdx < primes.length)
  {
    for(let numsIdx = 0; numsIdx < newNums.length; numsIdx++)
    {
      numTimes = 0;
      while(newNums[numsIdx] % primes[primesIdx] === 0)
      {
        numTimes++;
        newNums[numsIdx] /= primes[primesIdx]; 
      }
      if(maxTimes < numTimes)
      {
        maxTimes = numTimes;
      }
    }
    while(maxTimes > 0)
    {
      primeAnsArr.push(primes[primesIdx]);
      maxTimes--;
    }
    numTimes = 0;
    primesIdx++;
  }
  for(let primeNum of primeAnsArr)
  {
    answer *= primeNum;
  }
  //console.log(answer);
  return answer;
}

function isAOne(num)
{
  return num === 1;
}

function compareNums(a, b) 
{
  return a - b;
}
smallestCommons([23,18]);