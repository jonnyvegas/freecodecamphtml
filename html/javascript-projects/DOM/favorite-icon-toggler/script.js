function buttonClicked(button)
{
  if(button.classList.contains("filled"))
  {
    button.classList.remove("filled");
    button.innerHTML = '&#9825';
    return;
  }
  else if(!button.classList.contains("filled"))
  {
    button.classList.add("filled");
    button.innerHTML = '&#10084;';
  }
}

const favBtns = document.querySelectorAll(".favorite-icon");
//console.log(favBtns);

favBtns.forEach(setupEvents);

function setupEvents(button)
{
  button.addEventListener("click", () => buttonClicked(button));
}