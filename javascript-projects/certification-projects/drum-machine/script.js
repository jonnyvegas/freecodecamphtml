const padBankObj = document.getElementById("pad-bank");
const audioSampleURLStart = "https://cdn.freecodecamp.org/curriculum/drum/";
const drumPadObjs = [
  {
    letter: "Q",
    fileName: "Heater-1.mp3",
    name: "Heater 1"
  },
  {
    letter: "W",
    fileName: "Heater-2.mp3",
    name: "Heater 2"
  },
  {
    letter: "E",
    fileName: "Heater-3.mp3",
    name: "Heater 3"
  },
  {
    letter: "A",
    fileName: "Heater-4_1.mp3",
    name: "Heater 4"
  },
  {
    letter: "S",
    fileName: "Heater-6.mp3",
    name: "Clap"
  },
  {
    letter: "D",
    fileName: "Dsc_Oh.mp3",
    name: "Open-HH"
  },
  {
    letter: "Z",
    fileName: "Kick_n_Hat.mp3",
    name: "Kick-n'-Hat"
  },
  {
    letter: "X",
    fileName: "RP4_KICK_1.mp3",
    name: "Kick"
  },
  {
    letter: "C",
    fileName: "Cev_H2.mp3",
    name: "Closed-HH"
  },
]

const displayObj = document.getElementById("display");
let padButtonObjs = [];
//console.log(drumPadLetters[0]);
createPadButtons();
bindClickEvents();
function createPadButtons()
{
  for(let i = 0; i < 9; i++)
  {
    // Create the buttons.
    let theBtn = document.createElement("button");
    padBankObj.appendChild(theBtn);
    theBtn.classList.add("drum-pad");
    theBtn.innerText = drumPadObjs[i].letter;

    let audio = document.createElement("audio");
    audio.classList.add("clip");
    audio.src = audioSampleURLStart + drumPadObjs[i].fileName;
    audio.id = drumPadObjs[i].letter;
    //console.log(audio.src);
    theBtn.appendChild(audio);
    displayObj.before(theBtn);
  }
}

function bindClickEvents()
{
  const drumPads = document.querySelectorAll(".drum-pad");
  for(const drumPad of drumPads)
  {
    drumPad.addEventListener("click", (e) => drumPadClicked(e.target.querySelector('audio')));
  }
}

function drumPadClicked(audio)
{
  if(audio)
  {
    audio.currentTime = 0;
    audio.play();
    displayObj.innerText = drumPadObjs.find(obj => obj.letter === audio.id) ? drumPadObjs.find(obj => obj.letter === audio.id).name : "";
  }
}

document.onkeydown = (e) => handleKeyDown(e);

function handleKeyDown(e)
{
  const audio = document.getElementById(e.key.toUpperCase());
  drumPadClicked(audio);
}