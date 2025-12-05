function mutation(strArr)
{
  if(strArr.length <= 1)
  {
    return false;
  }
  console.log(strArr[0]);
  console.log(strArr[1]);
  let char1Arr = strArr[0].toLowerCase().split("");
  let char2Arr = strArr[1].toLowerCase().split("");
  for (const char of char2Arr)
  {
    if(!char1Arr.includes(char))
    {
      return false;
    }
  }
  return true;
}


