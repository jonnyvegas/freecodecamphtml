let themes = 
 [
   {
    name: "light",
    message: "I should have been the one to fill your dark soul with  LIGHT!"
  },
  {
    name: "dark",
    message: "1998... I'll never forget it..."
  },
  {
    name: "blues",
    message: "mac and cheese!"
  }
];

let themeDropdownObj = document.getElementById("theme-dropdown");
let themeBtn = document.getElementById("theme-switcher-button");
themeBtn.addEventListener("click", (event) => clickedThemeBtn(event));

let lightThemeObj = document.getElementById("theme-light");
let darkThemeObj = document.getElementById("theme-dark");
let bluesThemeObj = document.getElementById("theme-blues");
let themeObjs = [];
themeObjs.push(lightThemeObj);
themeObjs.push(darkThemeObj);
themeObjs.push(bluesThemeObj);

lightThemeObj.addEventListener("click", (event) => handleBtnClick(event, lightThemeObj));
darkThemeObj.addEventListener("click", (event) => handleBtnClick(event, darkThemeObj));
bluesThemeObj.addEventListener("click", (event) => handleBtnClick(event, bluesThemeObj));

window.addEventListener("click", clickedOnWindow);

function clickedThemeBtn(event)
{
  event.stopPropagation();
  themeBtn.setAttribute("aria-expanded", themeDropdownObj.hidden);
  themeDropdownObj.hidden = !themeDropdownObj.hidden;
}

function handleBtnClick(event, theButton)
{
  event.stopPropagation();
  for(const themeObj of themeObjs)
  {
    document.body.classList.remove(themeObj.id);
  }
  document.body.classList.add(theButton.id);
  let messageDiv = document.getElementById("message");
  let themeName = theButton.id.substring(theButton.id.indexOf("-") + 1);
  for(const currentTheme of themes)
  {
    if(currentTheme.name === themeName)
    {
      messageDiv.innerHTML = currentTheme.message;
      break;
    }
  }
}

function clickedOnWindow()
{
  themeDropdownObj.hidden = true;
  themeBtn.setAttribute("aria-expanded", themeDropdownObj.hidden);
}