function diffArray(arr1, arr2)
{
  // Find all unique results in arr1. Then, arr2. Then we need
  // to join the arrays, or else we only have the ones that are in 1 but not 2 
  // or 2 but not 1 but not both.
  let resultArr = arr1.filter((word) => !arr2.includes(word));
  let resultArr2 = arr2.filter((word) => !arr1.includes(word));  
  return resultArr.concat(resultArr2);
}
