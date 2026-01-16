function truthCheck(collection, pre) {
  let allTruthy = true;
  for(const item of collection)
  {
    if(item.hasOwnProperty(pre))
    {
      if(!item[pre])
      {
        allTruthy = false;
      }
    }
    else
    {
      allTruthy = false;
    }
  }
  return allTruthy;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");