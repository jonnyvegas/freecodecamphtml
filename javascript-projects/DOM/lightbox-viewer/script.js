let lightboxElem = document.querySelector(".lightbox");
let galleryItems = document.getElementsByClassName("gallery-item");
let closeButton = document.getElementById('close-btn');

let galleryItemArr = Array.from(galleryItems);
galleryItemArr.forEach(galleryItem => addGalleryClickListener(galleryItem));

function addGalleryClickListener(item)
{
  item.addEventListener("click", () => handleGalleryItemClick(item));
}

function handleGalleryItemClick(item)
{
  // show the item in the lightbox and change
  // the src of the item in the lightbox to this item's src w/o
  // thumbnail to display full size.
  let lightboxImg = document.getElementById('lightbox-image');
  let urlArr = item.src.split('-');
  urlArr[1] = urlArr[1].slice(urlArr[1].indexOf('.'), urlArr[1].length);
  lightboxImg.src = urlArr.join('');
  if(!lightboxElem.checkVisibility())
  {
    lightboxElem.style.display = "flex";
  }
}

lightboxElem.addEventListener("click", () => handleLightboxClick());
closeButton.addEventListener("click", () => handleLightboxClick());

function handleLightboxClick()
{
  //console.log("lightbox clicked");
  if(lightboxElem.checkVisibility())
  {
    lightboxElem.style.display = "none";
  }
}
