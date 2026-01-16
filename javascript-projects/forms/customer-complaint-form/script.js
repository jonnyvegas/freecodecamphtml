/// regexes
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const orderNoRegex = /^2024\d{6}$/;
const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;

/// object references
const nameObj = document.getElementById("full-name");
const emailObj = document.getElementById("email");
const orderNoObj = document.getElementById("order-no");
const productCodeObj = document.getElementById("product-code");
const quantityObj = document.getElementById("quantity");
const complaintObj = document.getElementById("complaints-group");
const complaintCheckboxes = complaintObj.querySelectorAll('input[type=checkbox]');
const complaintDescObj = document.getElementById("complaint-description");
const desiredSolutionObj = document.getElementById("solutions-group");
const desiredSolutionRadioObjs = desiredSolutionObj.querySelectorAll('input[type=radio]');
const desiredSolutionDescObj = document.getElementById("solution-description");
const form = document.getElementById("form");

/// event bindings
nameObj.addEventListener("change", (e) => handleFieldObjChange(e));
emailObj.addEventListener("change", (e) => handleRegexFieldObjChange(e, emailRegex));
orderNoObj.addEventListener("change", (e) => handleRegexFieldObjChange(e, orderNoRegex));
productCodeObj.addEventListener("change", (e) => handleRegexFieldObjChange(e, productCodeRegex));
quantityObj.addEventListener("change", (e) => handleQuantityObjChange(e));
complaintDescObj.addEventListener("change", (e) => handleComplaintChange(e));
desiredSolutionDescObj.addEventListener("change", (e) => handleSolutionDescChange(e));
form.addEventListener("submit", () => isValid(validateForm()));

bindComplaintCheckboxes();
bindSolutionRadios();

function bindComplaintCheckboxes()
{
  for(const box of complaintCheckboxes)
  {
    box.addEventListener("change", (e) => handleCheckboxChange(e));
  }
}

function bindSolutionRadios()
{
  for(const radio of desiredSolutionRadioObjs)
  {
    radio.addEventListener("change", (e) => handleSolutionChange(e));
  }
}


function validateForm()
{
  let customerInfo = {
    "full-name": false,
    "email" : false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false 
  };

  customerInfo["full-name"] = nameObj.value.trim().length !== 0;
  customerInfo["email"] = emailRegex.test(emailObj.value);
  customerInfo["order-no"] = orderNoRegex.test(orderNoObj.value);
  customerInfo["product-code"] = productCodeRegex.test(productCodeObj.value);
  customerInfo["quantity"] = quantityObj.value > 0;
  customerInfo["complaints-group"] = areAnyComplaintsChecked();
  customerInfo["complaint-description"] = 
                                (document.getElementById("other-complaint").checked 
                             && complaintDescObj.value.trim().length >= 20) || !document.getElementById('other-complaint').checked;
  customerInfo["solutions-group"] = areAnySolutionsChecked();
  customerInfo["solution-description"] = !document.getElementById("other-solution").checked || (document.getElementById("other-solution").checked && desiredSolutionDescObj.value.trim().length >= 20);
  return customerInfo;
}

function handleFieldObjChange(e)
{
  e.target.style.borderColor = e.target.value.trim().length !== 0 ? 'green' : 'red';
}

function handleRegexFieldObjChange(e, theRegex)
{
  e.target.style.borderColor = theRegex.test(e.target.value) ? 'green' : 'red';
}

function handleQuantityObjChange(e)
{
  e.target.style.borderColor = e.target.value > 0 ? 'green' : 'red';
}

function handleCheckboxChange(e)
{
  complaintObj.style.borderColor = areAnyComplaintsChecked() ? 'green' : 'red';
}

function handleComplaintChange(e)
{
  if(document.getElementById("other-complaint").checked)
  {
    e.target.style.borderColor = e.target.value.trim().length >= 20 ? 'green' : 'red';
  }
}

function handleSolutionChange(e)
{
  desiredSolutionObj.style.borderColor = areAnySolutionsChecked() ? 'green' : 'red';
}

function handleSolutionDescChange(e)
{
  if(document.getElementById("other-solution").checked)
  {
    e.target.style.borderColor = e.target.value.trim().length >= 20 ? 'green' : 'red';
  }
}

function handleSubmitForm(e)
{
  //e.preventDefault();
  isValid(validateForm());
}

function isValid(theObj)
{
  for(const field in theObj)
  {
    if(!theObj[field])
    {
      console.log(`${field} is invalid`);
      return false;
    }
  }
  console.log("all valid");
  return true;
}

function areAnyComplaintsChecked()
{
  const complaintsArr = Array.from(complaintCheckboxes);
  return complaintsArr.some(checkbox => checkbox.checked);
}

function areAnySolutionsChecked()
{
  const solutionsArr = Array.from(desiredSolutionRadioObjs);
  return solutionsArr.some(radioObj => radioObj.checked);
}
//console.log(validateForm()["email"]);

