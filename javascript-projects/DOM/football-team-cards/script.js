const footballTeam = 
{
  team: "DDinousaurs",
  year: 2026,
  headCoach: "Barney Rubble",
  players: [
    {
      name: "Fred Flintstone",
      position: "forward",
      isCaptain: false
    },
    {
      name: "John Smith",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Jimbo Stevens",
      position: "defender",
      isCaptain: true
    },
    {
      name: "Bill Jones",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
}

let headCoachElement = document.getElementById("head-coach");
headCoachElement.textContent = footballTeam.headCoach;

let yearElement = document.getElementById("year");
yearElement.textContent = footballTeam.year;

let teamElement = document.getElementById("team");
teamElement.textContent = footballTeam.team;

let selectFilterElement = document.getElementById('players');

selectFilterElement.addEventListener('change', () => handleSelectFilter());

function handleSelectFilter()
{
  if(selectFilterElement.value === 'all')
  {
    fillPlayerCards(footballTeam.players);
  }
  else 
  {
    fillPlayerCards(footballTeam.players.filter(({position}) => position === selectFilterElement.value));
  }
}

function fillPlayerCards(playerArr)
{
  const playerCardsElement = document.getElementById('player-cards');
  playerCardsElement.innerHTML = '';
  for(const player of playerArr)
  {
    console.log(player);
    // TODO: fix this so it is more simplified.
    // is OK for a quick and dirty project.
    if(player.isCaptain)
    {
    playerCardsElement.innerHTML += `<div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>'\n\'`
    }
    else 
    {
      playerCardsElement.innerHTML += `<div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>'\n\'`
    }
  }
}