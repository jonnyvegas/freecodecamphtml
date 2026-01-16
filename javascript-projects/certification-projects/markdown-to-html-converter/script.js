// Regexes for this project.
const header1Regex = /^(\#\s)(.*)/gm;
const header2Regex = /^(\##\s)(.*)/gm;
const header3Regex = /^(\###\s)(.*)/gm;
const boldRegex = /(\*\*|__)(.*)(\*\*|__)/gm;
const italicRegex = /(\*|_)(.+)(\*|_)/gm;
const imageRegex = /^!\[(.*)\]\((.*)\)$/gm;
const linkRegex = /^\[(.*)\]\((.*)\)$/gm;
const quoteRegex = /^\>\s(.*)$/gm;

// HTML elements.
const htmlOutputObj = document.getElementById("html-output");
const htmlPreviewObj = document.getElementById("preview");
const markdownInputObj = document.getElementById("markdown-input");

// Listen on input because the text will change as it is input.
markdownInputObj.addEventListener("input", convertMarkdown); 


//console.log(header3Regex.test("### some stuff blah blah balh"));

//console.log(boldRegex.test("**some text**"));

//console.log(italicRegex.test("_something_"));

//console.log(imageRegex.test("![somebs](anotherbs)"));

//console.log(linkRegex.test("[somebs](anotherbs)"));

//console.log(quoteRegex.test("> somethign so mething"));

function convertMarkdown()
{ 
  // Get the value of markdown because we're working with this value.
  let markdownVal = markdownInputObj.value;

  // Replace headers. TODO: Make more efficient and make replace all 3 without needing to test. Store that object in a new html that we will then edit further with regexes.
  let html = markdownVal.replace(header1Regex, "<h1>$2</h1>");
  if(header2Regex.test(markdownVal))
  {
    html = markdownVal.replace(header2Regex, "<h2>$2</h2>");
  }  
  if(header3Regex.test(markdownVal))
  {
    html = markdownVal.replace(header3Regex, "<h3>$2</h3>");
  }
  html = html.replace(boldRegex, "<strong>$2</strong>");
  html = html.replace(italicRegex, "<em>$2</em>");
  html = html.replace(imageRegex, "<img alt=\"$1\" src = \"$2\">");
  html = html.replace(linkRegex, "<a href=\"$2\">$1</a>");
  html = html.replace(quoteRegex, "<blockquote>$1</blockquote>");
  // Set the appropriate elements for the raw and preview.
  htmlOutputObj.innerText = html;
  htmlPreviewObj.innerHTML = html;
  return html;
}
