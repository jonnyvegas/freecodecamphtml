const poll = new Map();

function addOption(option)
{
  if(!option)
  {
    return `Option cannot be empty.`;
  }
  if(!poll.has(option))
  {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`
  }
  return `Option "${option}" already exists.`;
}

function vote(option, voterId)
{
  if(!poll.has(option))
  {
    return `Option "${option}" does not exist.`;
  }
  else
  {
    if(!poll.get(option).has(voterId))
    {
     poll.get(option).add(voterId);
     return `Voter ${voterId} voted for "${option}".`
    }
    else
    {
      return `Voter ${voterId} has already voted for "${option}".`;
    }
  }
}

function displayResults()
{
  let resultStr = "";
  resultStr += "Poll Results:\n";
  poll.forEach((value, key) => {
    resultStr += `${key}: ${value.size} votes\n`;
  });
  // Remove the newline because it doesn't pass otherwise. EYEROLL
  return resultStr.slice(0, -1);
}


console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Spain"));
console.log(vote("Turkey", "1234"));
console.log(vote("Turkey", "12345"));
console.log(vote("Morocco", "1234"));

console.log(displayResults());