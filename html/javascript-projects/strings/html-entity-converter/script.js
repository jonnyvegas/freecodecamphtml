const specialChars = "&<>.\"\'";
function convertHTML(stringToConvert)
{
  let newString = "";
  let charToReplace = '';
  let replacementString = "";
  for(const char of specialChars)
  {
    if(char === '&')
    {
      charToReplace = '&';
      replacementString = "&amp;";
    }
    else if(char === '<')
    {
      charToReplace = '<';
      replacementString = "&lt;";
    }
    else if(char === '>')
    {
      //console.log("replacing >");
      charToReplace = '>';
      replacementString = "&gt;";
    }
    else if(char === '\"')
    {
      charToReplace = '\"';
      replacementString = "&quot;";
    }
    else if(char === '\'')
    {
      charToReplace = '\'';
      replacementString = "&apos;";
    }
    stringToConvert = stringToConvert.replaceAll(charToReplace, replacementString);
  }
  return stringToConvert;
}
