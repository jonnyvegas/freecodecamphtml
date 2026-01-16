function largestOfAll(arrOfArrs)
{
  let largestArr = [];
  let largestSoFar;
  for(const arr of arrOfArrs)
  { 
    if(arr.length > 0)
    {
      largestSoFar = arr[0];
      if(arr.length > 1)
      {
        for(let i = 1; i < arr.length; i++)
        {
          if(arr[i] > largestSoFar)
          {
            largestSoFar = arr[i];
          }
        }
        largestArr.push(largestSoFar);
      }
    }
  }
  return largestArr;
}

