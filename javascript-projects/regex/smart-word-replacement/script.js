function isCapitalized(theStr)
{
  // are any of the first letters a capital???
  return /[A-Z]/.test(theStr.charAt(0));
}

function myReplace(theStr, wordToReplace, replacementWord)
{
  // Capitalize the first letter if the word to replace is. Otherwise, make it lowercase. 
  replacementWord = isCapitalized(wordToReplace) ? replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1) : replacementWord.charAt(0).toLowerCase() + replacementWord.slice(1);

  // make the regex with the word to replace. Make sure global because replace all.
  let regex = new RegExp(wordToReplace, "g");
  let newStr = theStr.replaceAll(regex, replacementWord);
  return newStr;
}

myReplace("Let us go to the store", "store", "mall");

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");