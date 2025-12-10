function findElement(arr, func)
{
  for(const num of arr)
  {
    if(func(num))
    {
      return num;
    }
  }
}