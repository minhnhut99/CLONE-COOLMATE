
// banner slide header

const bannerImgs = document.querySelectorAll('.banner-slide-img');
const bannerImg = document.querySelectorAll('.banner-slide-img > img');
const bannerContainer = document.querySelector('.banner-slide-container');
const bannerPrev = document.querySelector('.banner-prev');
const bannerNext = document.querySelector('.banner-next');

let widthSlides = bannerContainer.offsetWidth;
let idx = 0;

bannerPrev.addEventListener('click', (e) => {
  e.preventDefault();
  idx--;
  moveSlides();
})

bannerNext.addEventListener('click', (e) => {
  e.preventDefault();
  idx++;
  moveSlides();
})

function moveSlides() {
  bannerContainer.style.transform = 'translateX(' + idx * -widthSlides + 'px)';
}