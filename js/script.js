
// banner slide header

const bannerImgs = document.querySelectorAll('.banner-slide-img');
const bannerImg = document.querySelectorAll('.banner-slide-img > img');
const bannerContainer = document.querySelector('.banner-slide-container');
const bannerPrev = document.querySelector('.banner-prev');
const bannerNext = document.querySelector('.banner-next');

let widthSlides = bannerContainer.offsetWidth;
let idxSlides = 0;

bannerPrev.addEventListener('click', (e) => {
  e.preventDefault();
  idxSlides--;
  moveSlides();
})

bannerNext.addEventListener('click', (e) => {
  e.preventDefault();
  idxSlides++;
  moveSlides();
})

function moveSlides() {
  bannerContainer.style.transform = 'translateX(' + idxSlides * -widthSlides + 'px)';
}




//Accordion menu FAQs

const faqsLinks = document.querySelectorAll('.faqs-service-head');
const accBtnSvg = document.querySelectorAll('.accBtn svg');
faqsLinks.forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    // an het tat ca
    var allLinks = document.querySelectorAll('.faqs-service-head');
    allLinks.forEach(parentLink => {
      parentLink.removeAttribute('open');
    })
    
    //xu li mo cai hien tai
    let opened = this.hasAttribute('open');
    if (opened) {
      this.removeAttribute('open');
    }else {
      this.setAttribute('open', true);
    }
  }
})


// auto slider products 

const productsImgs = document.querySelectorAll('.products-new-imgs');
const productsImg = document.querySelectorAll('products-new-imgs > img');
const nextAutoSlide = document.querySelectorAll('.nextAutoSlide')
const prevAutoSlide = document.querySelectorAll('.prevAutoSlide')
let idxAutoSlide = 0
let widthAutoSlide = productsImg.offsetWidth;
let interval = setInterval(runAutoSlide(), 3000);

function runAutoSlide() {
  idxAutoSlide++
  changeImage()
}
function changeImage() {
  if (idxAutoSlide > productsImg.length - 1) {
    idxAutoSlide = 0
  }else if (idxAutoSlide < 0) {
    idxAutoSlide = productsImg.length - 1
  }

  imgs.style.transform = `translateX(${-idxAutoSlide * widthAutoSlide}px)`
}


function resetInterval() {
  clearInterval(interval)
  interval = setInterval(runAutoSlide(), 2000)
}

nextAutoSlide.addEventListener('click', (e) => {
  e.preventDefault();
  idxAutoSlide++;
  changeImage();
  resetInterval();
})

prevAutoSlide.addEventListener('click', (e) => {
  e.preventDefault();
  idxAutoSlide--;
  changeImage();
  resetInterval();
})

