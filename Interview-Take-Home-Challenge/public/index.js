// add query selectors
const uploadButtons = document.querySelectorAll('.uploader');
const designerInner = document.querySelector('.designer-start');
const designerImg = document.querySelector('.designer-img');
const designerImgC = document.querySelector('.designer-img-container');
const rotateBtn = document.querySelector('.rotate-img');
var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var closeButton = document.querySelector('.close-button');

// monitor "state" of rotate
let rotateFlag = false;

// add event listeners
uploadButtons.forEach(btn => {
  btn.addEventListener('click', fetchImage, false);
  btn.setAttribute("style", "cursor: pointer;");
});
rotateBtn.addEventListener('click', rotate, false);
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// fetches image from url
function fetchImage() {
  fetch('https://source.unsplash.com/random')
  .then(resp => loadImage(resp.url));
}

// loads fetched image
function loadImage(imgUrl) {
  swapDesignerDivs();
  designerImg.src = imgUrl;
  // directions say this works with rotate functionality
  // uncomment below if you want rotate to reset with upload
  // rotate = false;
}

// displays image div when first image is uploaded
function swapDesignerDivs() {
  if (designerInner.style.display !== 'none') designerInner.style.display = 'none';  
  designerImgC.style.display = 'block';
}

// toggles between rotating designer image aspect ratio 90 degrees and resetting to 0 degrees
function rotate() {
  if (rotateFlag === false) {
    designerImg.classList.add('rotate');
  } else {
    designerImg.classList.remove('rotate');
  }
  rotateFlag = !rotateFlag;
}

// dropdown menu functions
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (event.target === undefined || !event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// modal functions
function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}