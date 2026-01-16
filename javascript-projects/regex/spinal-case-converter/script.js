const spaceRegex = /[\s+\_]/g;
const ucLettersRegex = /[A-Z]/g;
const doubleHyphenRegex = /--/g;

function spinalCase(theString)
{
  // get rid of spaces, should be left with capitals or just hypens.
  let noSpaceString = theString.replace(spaceRegex, '-');
  // any uppercase letters should be lowered but also have - so we can track them.
  let spinalCaseStr = noSpaceString.replace(ucLettersRegex, (item) => `-${item.toLowerCase()}`);
  // do some final cleanup and replace the -- with - so we get a final spinal-case string.
  let cleanedSpinalCaseString = spinalCaseStr.replace(doubleHyphenRegex, "-");
  // the first word was capitalized, so remove the - in front of it, the rest are fine.
  if(cleanedSpinalCaseString.charAt(0) === '-')
  {
    cleanedSpinalCaseString = cleanedSpinalCaseString.slice(1, cleanedSpinalCaseString.length);
  }
  return cleanedSpinalCaseString;
}

//spinalCase("This Is Spinal Tap");
spinalCase("This Is Spinal Tap")
//spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh");
spinalCase("thisIsSpinalTap");