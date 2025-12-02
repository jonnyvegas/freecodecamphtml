let email = "apple.pie@example.com";
console.log(maskEmail(email));

function maskEmail(email) {
  // In case of whitespace in string.
  let cleanedEmail = email.trim();
  
  // @ and domain aren't masked.
  let atIndex = cleanedEmail.indexOf("@");
  //console.log(`@ index: ${atIndex}`);
  let domainString = cleanedEmail.slice(atIndex);
  //console.log(`Domain string: ${domainString}`);

  // need everything up to @ sign now that we know the index.
  let newString = cleanedEmail.slice(0, atIndex);
  //console.log(`String before @ sign: ${newString}`);
  //console.log(newString);
  
  // Masking with *, first and last letters of user name w/o domain don't count.
  let asteriskString = "*"
  let maskedString = asteriskString.repeat(newString.length - 2);
  //console.log(maskedString);
  
  // First and last letters of user name unchanged. Masked string is the length of everything 
  // minus those 2.
  // Add the domain string at the end.
  let result = newString[0] + maskedString + newString[newString.length - 1] + domainString;
  //console.log(result);
  return result;
}