const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword(passwordLen)
{
  let thePassword = "";
  let randomChar = '';
  for(let i = 0; i < passwordLen; i++)
  {
    randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
    thePassword += randomChar;
  }
  //console.log(`Generated password: ${thePassword}`);
  return thePassword;
}

let password = generatePassword(10);
console.log(`Generated password: ${password}`);