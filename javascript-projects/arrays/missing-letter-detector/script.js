const letters = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str)
{
  let newString = letters.slice(letters.indexOf(str[0]), letters.indexOf(str[str.length - 1]));
  for(let i = 0; i < str.length; i++)
  {
      if(newString[i] !== str[i])
      {
        return newString[i];
      }
  }
  return undefined;
}

console.log(fearNotLetter("stvwx"));