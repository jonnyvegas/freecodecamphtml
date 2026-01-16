let vowelRegex = /^([^aeiou]*)/i;
let beginsWithVowelRegex = /^[aeiou]/i;

function translatePigLatin(theStr)
{
  // begins with consonant.
  if(!beginsWithVowelRegex.test(theStr))
  {
    // split based on vowels, keep counting the vowels.
    let theSplit = theStr.split(vowelRegex);
    // split results in empty entries sometimes. Get rid of them for this case.
    let newSplitArr = theSplit.filter((entry) => entry);
    // we now have split consonant cluster before and after the vowels. 
    // Only one means it didn't split, aka no vowels found.
    // Otherwise, we swap anything found after the vowel (and the vowel) with the consonant cluster
    // that preceded it.
    if(newSplitArr.length > 1)
    {
      return newSplitArr[1] + newSplitArr[0] + "ay";
    }
    return newSplitArr[0] + "ay";
  }
  return theStr + "way";
}

translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("rhythm");