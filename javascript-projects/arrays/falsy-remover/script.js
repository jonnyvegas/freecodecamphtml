function bouncer(theArr)
{
  let newArr = [];
  for(const item of theArr)
  {
    // check if the item can be coerced into a false bool. If not, add it.
    if(item)
    {
      newArr.push(item);
    }
  }
  return newArr;
}
