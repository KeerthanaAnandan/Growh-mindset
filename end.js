const firstpoints = sessionStorage.getItem("firstpoints");
const secondpoints = sessionStorage.getItem("secondpoints");
const thirdpoints = sessionStorage.getItem("thirdpoints");
const fourthpoints = sessionStorage.getItem("fourthpoints");
const fifthpoints = sessionStorage.getItem("fifthpoints");

document.querySelector(".firstpo").innerHTML = firstpoints;
document.querySelector(".secondpo").innerHTML = secondpoints;
document.querySelector(".thirdpo").innerHTML = thirdpoints;
document.querySelector(".fourthpo").innerHTML = fourthpoints;
document.querySelector(".fifthpo").innerHTML = fifthpoints;

////////////////////////social share
/*const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hey! Checkout my scores");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();*/
