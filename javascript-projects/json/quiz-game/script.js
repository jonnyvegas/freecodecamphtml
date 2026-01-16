let questions = [
{
  category: "History",
  question: "Who was the first president of the US?",
  choices: ["Georgie boy", "Abraham", "Jebediah"],
  answer: "Georgie boy"
},

{
  category: "Science",
  question: "Who DNA discover?",
  choices: ["Crick", "Darwin", "Poopy"],
  answer: "Crick"
},

{
  category: "Tech",
  question: "Who make linux?",
  choices: ["Gates", "Jobs", "Linus"],
  answer: "Linus"
},

{
  category: "Games",
  question: "When SupMarBros?",
  choices: ["1945", "1985", "1998"],
  answer: "1985"
},

{
  category: "Misc",
  question: "Best food?",
  choices: ["pizza", "ranch", "donuts"],
  answer: "pizza"
}];

function getRandomQuestion(questionArr)
{
  if(questionArr.length > 0)
  {
    let randomIdx = Math.floor(Math.random() * questionArr.length);
    return questionArr[randomIdx]
  }
  return "";
}

function getRandomComputerChoice(choicesArr)
{
  if(choicesArr.length > 0)
  {
    let randomIdx = Math.floor(Math.random() * choicesArr.length);
    return choicesArr[randomIdx];
  }
  return "";
}

function getResults(inQuestion, inChoice)
{
  if(inQuestion.answer === inChoice)
  {
    return "The computer's choice is correct!";
  }
  else 
  {
    return `The computer's choice is wrong. The correct answer is: ${inQuestion.answer}`;
  }
}