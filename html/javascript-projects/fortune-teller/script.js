let fortune1 = "You need to be more creative";
let fortune2 = "Things will get better soon";
let fortune3 = "Avoid the full moon";
let fortune4 = "Be cautious when going outside";
let fortune5 = "You will get what you seek";

let min = 1;
let max = 5;

let randomNumber = -1;
randomNumber = Math.random() * (max - min) + min;
// We want a whole number to check for, or we can floor each time we check (less efficient).
randomNumber = Math.floor(randomNumber);

// Uncomment for debug.
//console.log(randomFortuneNum);
let selectedFortune;
if(randomNumber === 1)
{
  selectedFortune = fortune1;
}
else if(randomNumber === 2)
{
  selectedFortune = fortune2;
}
else if(randomNumber === 3)
{
  selectedFortune = fortune3;
}
else if(randomNumber === 4)
{
  selectedFortune = fortune4;
}
else if(randomNumber === 5)
{
  selectedFortune = fortune5;
}
else
{
  console.log("Check your math");
}

console.log(selectedFortune);