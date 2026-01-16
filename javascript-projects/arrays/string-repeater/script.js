function repeatStringNumTimes(theString, numTimes)
{
  let repeatedString = "";
  if(numTimes > 0)
  {
    let count = numTimes;
    while(count > 0)
    {
      repeatedString += theString;
      count--;
    }
  }
  return repeatedString;
}