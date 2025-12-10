let inventory = [];

function findProductIndex(productName, productIndex)
{
  for(const item of inventory)
  {
    if(item.name.toLowerCase() === productName.toLowerCase())
    {
      return inventory.indexOf(item);
    }
  }
  return -1;
}

function addProduct(productToAdd)
{
  //console.log(inventory);
  let productWasFound = false;
  for(const item of inventory)
  {
    if(item.name.toLowerCase() === productToAdd.name.toLowerCase())
    {
      item.quantity += productToAdd.quantity;
      console.log(`${productToAdd.name.toLowerCase()} quantity updated`);
      productWasFound = true;
      break;
    }
  }
  if(!productWasFound)
  {
    //console.log("don't have product");
    productToAdd.name = productToAdd.name.toLowerCase();
    inventory.push(productToAdd);
    //console.log(productToAdd);
    console.log(`${productToAdd.name} added to inventory`);
  }
}

function removeProduct(productName, quantity)
{
  //console.log(`${productName} ${quantity}`);
  let resultingQuantity = 0;
  let productFound = false;
  for(const item of inventory)
  {
    if(productName.toLowerCase() === item.name.toLowerCase())
    {
      productFound = true;
      resultingQuantity = item.quantity - quantity;
      if(resultingQuantity > 0)
      {
        item.quantity = resultingQuantity;
        console.log(`Remaining ${item.name} pieces: ${item.quantity}`);
      }
      else if(resultingQuantity === 0)
      {
        inventory.splice(inventory.indexOf(item), 1);
      }
      // less than 0.
      else 
      {
        console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${item.quantity}`);
      }
      break;
    }
  }
  if(!productFound)
  {
    let name = productName.toLowerCase()
    console.log(`${name} not found`);
  }
  productFound = false;
}
