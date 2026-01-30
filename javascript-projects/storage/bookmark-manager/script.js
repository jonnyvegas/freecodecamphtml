// vars
const bookmarksKey = "bookmarks";
const nameKey = "name";
const categoryKey = "category";
const urlKey = "url";

// HTML elements
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const closeListBtn = document.getElementById("close-list-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryList = document.getElementById("category-list");

// event listeners/bindings
addBookmarkBtn.addEventListener("click", (e) => clickedAddBookmark(e));
closeFormBtn.addEventListener("click", (e) => clickedCloseForm(e));
addBookmarkBtnForm.addEventListener("click", (e) => clickedAddBookmarkBtnForm(e));
document.getElementById("view-category-button").addEventListener("click", (e) => clickedViewCategory(e));
closeListBtn.addEventListener("click", (e) => clickedCloseList(e));
document.getElementById("delete-bookmark-button").addEventListener("click", (e) => clickedDeleteBookmark(e));
// functions

function getBookmarks()
{
  const bookmarksString = localStorage.getItem(bookmarksKey);
  if(!bookmarksString)
  {
    //console.log("null");
    return [];
  }
  let bookmarksData;// = JSON.parse(bookmarksString) || [];
  // another thing they didn't really go over. They did try catch at one point, but
  // if this isn't here, you get an uncaught exception. You can't just check if it's
  // valid, apparently, when parsing, you need to try first? It's due to 
  // invalid, e.g. when passing a string and not json.
  try 
  { 
    bookmarksData = JSON.parse(bookmarksString) || [];
  }
  catch (e)
  {
    return [];
  }
  if(!Array.isArray(bookmarksData))
  {
    return [];
  }
  let isValid = true;
  // They did not tell you these are the properties, but you need to figure that out
  // based on the form ids and hoping that if you are like "hey, category seems like it
  // would fit here", that you're correct. I pieced this together from some examples.
  bookmarksData.forEach((bookmark) => {
    if(!Object.hasOwn(bookmark, nameKey) ||
       !Object.hasOwn(bookmark, categoryKey) ||
       !Object.hasOwn(bookmark, urlKey))
       {
         isValid = false;
         return;
       }
  })
  if(isValid)
  {
    return bookmarksData;
  }
  return [];
}

function displayOrCloseForm()
{
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory()
{
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// event functions

function clickedAddBookmark(event)
{
  categoryName.innerText = categoryDropdown.value.charAt(0).toUpperCase() + categoryDropdown.value.slice(1);
  displayOrCloseForm();
}

function clickedCloseForm(event)
{
  displayOrCloseForm();
}

function clickedAddBookmarkBtnForm(event)
{
  // get the bookmarks
  let bookmarksData = getBookmarks();
  // get info from name, category, url
  let newBookmark = {
    name: document.getElementById("name").value,
    category: categoryDropdown.value,
    url: document.getElementById("url").value,
  };
  //console.log(newBookmark);
  //console.log(bookmarksData);
  // add object to end of array in storage.
  bookmarksData.push(newBookmark);
  // store after setting.
  localStorage.setItem(bookmarksKey, JSON.stringify(bookmarksData));
  clearNameAndURL();
  displayOrCloseForm();
}

function clickedViewCategory(event)
{
  displayOrHideCategory();
  bookmarkListSection.querySelector(".category-name").innerText = categoryDropdown.value;
  const theBookmarks = getBookmarks();
  // some checks for an empty array, no need to check length === 0.
  if(!theBookmarks.some((bookmark) => bookmark.category === categoryDropdown.value) || !Array.isArray(theBookmarks))
  {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
    //displayOrHideCategory();
    return;
  }
  //console.log('got here');
  categoryList.innerHTML = "";
  let selectedCategoryArr = theBookmarks.filter((bookmark) => bookmark.category === categoryDropdown.value);
  //console.log(selectedCategoryArr);
  selectedCategoryArr.forEach((bookmark) => {
    //console.log(`adding bookmark ${bookmark.name}`);
    //console.log(categoryList.innerHTML);
    categoryList.innerHTML += 
    `
      <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="${bookmark.category}">
      <label for="${bookmark.name}">
        <a href="${bookmark.url}">${bookmark.name}</a>
      </label>
    `
  });
 // displayOrHideCategory();
}

function clickedCloseList(event)
{
  displayOrHideCategory();
}

function clickedDeleteBookmark()
{
  // need category list input that is checked.
  let selectedInput = categoryList.querySelector('input:checked');

  // don't forget to check the category.
  let filteredBookmarks = getBookmarks().filter((bookmark) => !(bookmark.name === selectedInput.value && bookmark.category === categoryDropdown.value));

  // stringify here or it won't work.
  localStorage.setItem(bookmarksKey, JSON.stringify(filteredBookmarks));
  clickedViewCategory(null);
}

// helper
function clearNameAndURL()
{
  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
}
