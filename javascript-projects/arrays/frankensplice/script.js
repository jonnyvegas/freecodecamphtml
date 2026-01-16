function frankenSplice(firstArr, secondArr, spliceIdx)
{
  let returnedArr = [];
  // push all items up to the splice idx before splicing.
  for(let i = 0; i < spliceIdx; i++)
  {
    returnedArr.push(secondArr[i]);
  }
  // splice the new items in.
  for(const item of firstArr)
  {
    returnedArr.push(item);
  }
  // push the rest of the second array, starting at the splice index (where we stopped previously).
  for(let i = spliceIdx; i < secondArr.length; i++)
  {
    returnedArr.push(secondArr[i]);
  }
  return returnedArr;
}