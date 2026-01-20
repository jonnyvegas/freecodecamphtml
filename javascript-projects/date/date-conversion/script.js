let currentDate = new Date();
let currentDateFormat = `Current Date and Time: ${currentDate}`;
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(currentDateFormat);


//currentDate = new Date(2025, 8, 24);
function formatDateMMDDYYYY(theDate)
{
  return `Formatted Date (MM/DD/YYYY): ${theDate.getMonth() + 1}/${theDate.getDate()}/${theDate.getFullYear()}`;
}

console.log(formatDateMMDDYYYY(currentDate));

formatDateLong(currentDate);

function formatDateLong(theDate)
{
  return `Formatted Date (Month Day, Year): ${monthNames[theDate.getMonth()]} ${theDate.getDate()}, ${theDate.getFullYear()}`;
}