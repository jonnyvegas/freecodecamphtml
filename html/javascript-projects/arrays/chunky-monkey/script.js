function chunkArrayInGroups(theArr, chunks)
{
  let returnedArr = [];
  for(let i = 0; i < theArr.length; i += chunks)
  {
    returnedArr.push(theArr.slice(i, i + chunks));
  }
  return returnedArr;
}