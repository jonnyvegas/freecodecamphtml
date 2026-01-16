
let textInput = document.getElementById('text-input');
let charCountElem = document.querySelector("#char-count");
textInput.addEventListener("input", (event) => updateCharCount(textInput));

function updateCharCount(textInput)
{
  if(textInput.value.length <= 50)
  {
    let charCountText = charCountElem.textContent.split(' ');
    charCountText[2] = `${textInput.value.length}/50`;
    charCountElem.textContent = charCountText.join(' ').trim();
    charCountElem.style.color = "black";
    if(textInput.value.length === 50)
    { 
      charCountElem.style.color = "red";
    }
  }
  else
  {
    textInput.value = textInput.value.substring(0, 50);
  }
  
  //console.log(textInput.value.length);
}