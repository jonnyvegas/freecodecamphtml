function pyramid(charToRepeat, numRows, pointsDown)
{
  let pyramidString = "\n";
  let newString = "";
  const spaceChar = " ";  

  // num chars per row: 2 * rowNum - 1, e.g, 1st row has 1, 2nd row has 3, 3rd row has 5, etc.
  // if points down, we count down from numRows to 0.
  // if points up, count up from 1 to numRows.
  // if points up, use unshift. if points down, use push.
  // add \n to the end after we do the characters.
  // spaces are numRows - rowNum e.g., 4 rows, if on 4th row, no spaces. 3rd row has 1, 
  // 2nd row has 2, etc.
  let rowNum = 0;
  if(!pointsDown)
  {
    while(rowNum < numRows)
    {
      newString = spaceChar.repeat(numRows - rowNum - 1); 
      newString += charToRepeat.repeat(2 * (rowNum) + 1);
      pyramidString += newString;
      pyramidString += "\n";
      rowNum++;
    }
  }
  else
  {
    pyramidString = "\n";
    rowNum = numRows - 1;
    while(rowNum >= 0)
    {
      newString = spaceChar.repeat(numRows - rowNum - 1); 
      newString += charToRepeat.repeat(2 * (rowNum) + 1);
      pyramidString += newString;
      pyramidString += "\n";
      rowNum--;
    }
  }
  console.log(pyramidString);
  return pyramidString;
}

pyramid("o", 4, false);
pyramid("p", 5, true);