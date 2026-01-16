function titleCase(theString)
{
  // split the string into words, easier to work w/ words.
  let wordArr = theString.split(" ");
  let newString = "";
  let newWord = "";
  // go through every word, capitalize the first character,
  // make the others lowercase. add a space in between each word.
  for (let theWord of wordArr)
  {
    newWord = theWord[0].toUpperCase();
    newWord += theWord.slice(1).toLowerCase();
    newString += newWord + " ";
  }
  // get rid of the extra space at the end. No need to check if it was the last word.
  newString = newString.trim();
  return newString;
}

titleCase("I'm a little tea pot");