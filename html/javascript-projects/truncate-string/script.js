let testString = "A-tisket a-tasket A green and yellow basket";
console.log(truncateString(testString, 8));

function truncateString(theString, truncateLength)
{
  if(theString.length <= truncateLength)
  {
    return theString;
  }
  let endOfString = "...";
  return theString.slice(0, truncateLength) + endOfString;
}