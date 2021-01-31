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
