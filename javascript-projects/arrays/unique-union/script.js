function uniteUnique(...arrays)
{
  let result = [];
  for(const array of arrays)
  {
    for(const item of array)
    {
      if(!result.includes(item))
      {
        result.push(item);
      }
    }
  }
  return result;
}