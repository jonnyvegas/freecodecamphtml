reverseString("hello");

function reverseString(theString)
{
  // split the string into char array b/c strings are immutable.
  let charArray = theString.split('');
  // reverse the char array. arrays can be reversed.
  charArray.reverse();

  // empty delimiter ensures that we get rid of the commas. Empty join puts commas in everything.
  return charArray.join("");
}1