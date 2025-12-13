function whatIsInAName(objArr, sourceObj)
{
  objArr = objArr.filter(
    function (currentObject)
    {
      //let foundObj = true;
      for(const key in sourceObj)
      {
        if(!currentObject.hasOwnProperty(key) || currentObject[key] !== sourceObj[key]) 
        {
          return false;
        }
      }
      return true;
    }
  );
  console.log(objArr);
  return objArr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });