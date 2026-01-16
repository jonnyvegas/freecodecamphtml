function pairElement(theStr)
{
  let result = [];
  
  for(const char of theStr)
  {
    let pair = [];
    let charToPush = '';
    pair.push(char);
    if(char === 'A')
    {
      charToPush = 'T';
    }
    else if(char === 'T')
    {
      charToPush = 'A';
    }
    else if(char === 'C')
    {
      charToPush = 'G';
    }
    else if(char === 'G')
    {
      charToPush = 'C';
    }
    pair.push(charToPush);
    result.push(pair);
  }
  //console.log(result);
  return result;
}

 pairElement("ATCGA");