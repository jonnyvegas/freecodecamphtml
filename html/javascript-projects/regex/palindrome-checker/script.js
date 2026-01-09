// caret inside of [] denotes a not. So not any of these characters.
const alphaNumRegex = /[^a-zA-Z0-9]/g;

function isPalindrome(stringToCheck)
{
  let newString = stringToCheck.replace(alphaNumRegex, "");
  if(newString.length <= 1)
  {
    return true;
  }
  let lowIdx = 0;
  let highIdx = newString.length - 1;
  while(lowIdx < highIdx)
  {
    if(newString.charAt(lowIdx).toLowerCase() !== newString.charAt(highIdx).toLowerCase())
    {
      return false;
    }
    lowIdx++;
    highIdx--;
  }
  return true;
}

const checkBtn = document.getElementById("check-btn");


checkBtn.addEventListener("click", (event) => handleCheckBtnClick(event));

function handleCheckBtnClick(event)
{
  const textInput = document.getElementById("text-input");
  if(textInput.value === "")
  {
    alert("Please input a value");
    return;
  } 
  const resultText = document.getElementById("result");   
    resultText.innerHTML = isPalindrome(textInput.value) ? `${textInput.value} is a palindrome` : `${textInput.value} is not a palindrome`
  
}
