const books = [
  {
    title: "First Title",
    authorName: "First Last",
    releaseYear: 1998
  },
  {
    title: "Next Title",
    authorName: "John Smith",
    releaseYear: 2000
  },
  {
    title: "Last Title",
    authorName: "John Smith",
    releaseYear: 1940
  }
];

function sortByYear(book1, book2)
{
  if(book1.releaseYear < book2.releaseYear)
  {
    return -1;
  }
  if(book1.releaseYear > book2.releaseYear)
  {
    return 1;
  }
  return 0;
}

let filteredBooks = books.filter(book => book.authorName === "John Smith");
console.log(filteredBooks.sort(sortByYear));