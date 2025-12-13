function steamrollArray(nestedArray)
{
  let result = [];
  nestedArray.forEach(
    function checkItems(item)
  {
    //console.log(item);
    if(Array.isArray(item))
    {
      //console.log("item is array");
      result.push(...steamrollArray(item));
    }
    else
    {
      result.push(item);
    }
  });
  console.log(result);
  return result;
}



 steamrollArray([[["a"]], [["b"]]]);