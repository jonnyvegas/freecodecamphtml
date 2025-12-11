function getIndexToIns(arr, num)
{
  let returnVal = -1;
  if(arr.length === 0)
  {
    returnVal = 0;
    return returnVal;
  }
  //console.log(arr);
  let sortedArr = arr.sort(compareNums);
  console.log(sortedArr);
  returnVal = sortedArr.findIndex(helpFindIndex(num));
  if(returnVal === -1)
  {
    return arr.length;
  }
  return returnVal;
}

function compareNums(a, b)
{
  return a - b;
}

function helpFindIndex(num)
{
  return (numToCheck) => num <= numToCheck;
}

 
console.log( getIndexToIns([3, 10, 5], 11));