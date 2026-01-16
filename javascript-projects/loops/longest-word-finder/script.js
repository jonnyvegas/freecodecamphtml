function findLongestWordLength(sentence)
{
  let longestWordLength = 0;
  if(sentence.trim() === "")
  {
    return longestWordLength;
  }
  let splitSentence = sentence.split(" ");
  for(const word of splitSentence)
  {
    if(word.length > longestWordLength)
    {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
}
