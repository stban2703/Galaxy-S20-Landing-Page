window.location.replace("#");
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

const html = document.querySelector("html");

// Scroll interactions
const navTexts = document.querySelectorAll(".section-nav__text");
const navSections = document.querySelectorAll(".navegation");
const burguerTexts = document.querySelectorAll(".burguer-menu__text");

window.addEventListener('scroll', function () {

  let isSelected = false;

  for (let i = navSections.length - 1; i >= 0; i--) {
    if (window.scrollY > navSections[i].offsetTop - 100 && !isSelected) {
      burguerTexts[i].classList.add('burguer-menu__text--current');
      navTexts[i].classList.add('section-nav__text--current');
      isSelected = true;;
    } else {
      burguerTexts[i].classList.remove('burguer-menu__text--current');
      navTexts[i].classList.remove('section-nav__text--current');
    }
  }
});

burguerTexts.forEach(function (e, i) {
  e.addEventListener('click', handleCloseBurguer);
});


// Burguer menu
const burguerBtn = document.querySelector(".section-nav__menu");
const burguerMenu = document.querySelector(".burguer-menu");
const closeBurguerBtn = document.querySelector(".burguer-menu__close");
const darken = document.querySelector(".darken");

function handleOpenBurguer() {
  darken.classList.add("darken--active")
  burguerMenu.classList.add("burguer-menu--move");
}

function handleCloseBurguer() {
  if (darken.classList.contains("darken--active") && burguerMenu.classList.contains("burguer-menu--move")) {
    darken.classList.remove("darken--active")
    burguerMenu.classList.remove("burguer-menu--move");
    html.style.overflow = "visible";
  }
}

burguerBtn.addEventListener('click', handleOpenBurguer);
closeBurguerBtn.addEventListener('click', handleCloseBurguer);

// Zoom interaction
// Based on https://daily-dev-tips.com/posts/vanilla-javascript-image-magnify-%F0%9F%94%8E/
const zoomContainer = document.querySelector(".feature__interaction--zoom");
const original = document.querySelector(".feature__image");
const magnified = document.querySelector(".feature__zoom-image");

function handleZoom(e) {
  const pageX = e.pageX || e.touches[0].pageX;
  const pageY = e.pageY || e.touches[0].pageY;
  const style = magnified.style,
    x = pageX - this.offsetLeft,
    y = pageY - this.offsetTop,
    imgWidth = original.width,
    imgHeight = original.height,
    xperc = (x / imgWidth) * 100,
    yperc = (y / imgHeight) * 100;

  // Set the background of the magnified image horizontal
  style.backgroundPositionX = xperc + '%';
  // Set the background of the magnified image vertical
  style.backgroundPositionY = yperc + '%';

  // Move the magnifying glass with the mouse movement.
  style.left = x - magnified.offsetWidth / 2 + 'px';
  style.top = y - magnified.offsetHeight / 2 + 'px';
}

zoomContainer.addEventListener('mousemove', handleZoom, false);
zoomContainer.addEventListener('touchmove', handleZoom, false);
zoomContainer.addEventListener('touchstart', function () {
  html.style.overflow = "hidden";
})
zoomContainer.addEventListener('touchend', function () {
  html.style.overflow = "visible";
})

// Slider Interaction
const slider = document.querySelector('.feature__slider');
const img = document.querySelector('.feature__image--compare:last-child');

function handleSlider() {
  img.style.width = (slider.value * 100) + '%';
}
slider.addEventListener('input', handleSlider);


// Gallery
const galleryContainer = document.querySelector('.gallery__container');
const galleryStripe = document.querySelector('.gallery__stripe');
const backButton = document.querySelector('.gallery__button--left');
const nextButton = document.querySelector('.gallery__button--right');
const videos = document.querySelectorAll('.gallery__video');
let current = 0;

backButton.addEventListener('click', function () {
  current--;
  if (current < 0) {
    current = galleryStripe.children.length - 1;
  }

  // Pause video
  videos.forEach(function (e, i) {
    e.pause();
  });


  const width = galleryContainer.clientWidth;
  galleryStripe.style.transform = 'translate(-' + (width * current) + 'px, 0px)';
})

nextButton.addEventListener('click', function () {
  current++;
  if (current >= galleryStripe.children.length) {
    current = 0;
  }

  // Pause video
  videos.forEach(function (e, i) {
    e.pause();
  })

  const width = galleryContainer.clientWidth;
  galleryStripe.style.transform = 'translate(-' + (width * current) + 'px, 0px)';
});

