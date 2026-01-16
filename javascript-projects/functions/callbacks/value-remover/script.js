function destroyer(arr, ...args)
{
  //console.log(arr);
  //let result = arr;
  //let currResult = []
  for(const item of args)
  {
    arr = arr.filter(
      function (itemToCheck)
      {
        return itemToCheck !== item;
      } 
    );
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);