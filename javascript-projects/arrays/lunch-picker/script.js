let lunches = [];



function addLunchToEnd(arr, item)
{
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, item)
{
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr)
{
  let removedItem = arr.pop();
  if (removedItem !== undefined)
  {
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  else
  {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr)
{
  let removedItem = arr.shift();
  if (removedItem !== undefined)
  {
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  else
  {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr)
{
  let arrayLength = arr.length;
  if(arrayLength <= 0)
  {
    console.log("No lunches available.");
  }
  else
  {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomElement}`);
    
  }
}

function showLunchMenu(arr)
{
  if(arr.length <= 0)
  {
    console.log("The menu is empty.");
  }
  else
  {
    console.log(`Menu items: ${arr.join(', ')}`);
  }
}