/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

var imagesP1 = ["./images/Project 1_2.png", "./images/Project 1_3.png"]

var indexP1 = 0;
setInterval (function(){
  if (indexP1 === imagesP1.length) {
    indexP1 = 0;
  }
  document.getElementById("imageP1").src = imagesP1[indexP1];
  indexP1++;
} , 5000);

var imagesP2 = ["./images/Project 2_2.png", "./images/Project 2_3.png", "./images/Project 2_4.png"]

var indexP2 = 0;
setInterval (function(){
  if (indexP2 === imagesP2.length) {
    indexP2 = 0;
  }
  document.getElementById("imageP2").src = imagesP2[indexP2];
  indexP2++;
} , 5000);
