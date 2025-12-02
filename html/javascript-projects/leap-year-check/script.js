let year = 2024;
let result = isLeapYear(year);
console.log(result);
function isLeapYear(theYear) 
{
    if(theYear % 4 === 0)
    {
        if(theYear % 100 === 0)
        {
            if(theYear % 400 === 0)
            {
              return `${theYear} is a leap year.`;
            }
            return `${theYear} is not a leap year.`;
        }
        return `${theYear} is a leap year.`;
    }
    
    else
    {
      return `${theYear} is not a leap year.`;
    }
}