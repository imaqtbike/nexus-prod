// let boxProp = box.getBoundingClientRect();
// const isInViewOrNot = boxProp.top >= 0 && 
// boxProp.left >= 0 && 
// boxProp.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
// boxProp.right <= (window.innerWidth || document.documentElement.clientWidth)
// console.log(isInViewOrNot)
const box = document.querySelector('.company__strength');
const zoomElement = document.querySelector('.company__title');
const zoomElementContainer = document.querySelector('#container');
const zoomPoint = document.querySelector('.zoom__point');
const textSlideInFromRight = document.querySelector('.text__1');
const textSlideInFromLeft = document.querySelector('.text__2');
let zoomOriginalLeft = 50;
let zoomOriginalRight = -50;
let slideSpeed = 0.89;
let originalZoom = 0.5;
let zoomSpeed = 0.5;
let zoomAddition = 1;
let lastScrollTop = 0;
document.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop; //
    if (st > lastScrollTop) {
        // downscroll code
        zoomElement.style.transform = `scale(  ${originalZoom = originalZoom + zoomSpeed},  ${originalZoom = originalZoom + zoomSpeed})`;
        textSlideInFromLeft.style.transform = `translate(${zoomOriginalLeft = zoomOriginalLeft - slideSpeed}%, 0px)`;
        textSlideInFromRight.style.transform = `translate(${zoomOriginalRight = zoomOriginalRight + slideSpeed}%, 0px)`;
    } else if (st < lastScrollTop && window.pageYOffset !== 0) {
        // upscroll code
        zoomElement.style.transform = `scale(  ${originalZoom = originalZoom - zoomSpeed},  ${originalZoom = originalZoom - zoomSpeed})`;
        textSlideInFromLeft.style.transform = `translate(${zoomOriginalLeft = zoomOriginalLeft + slideSpeed}%, 0px)`;
        textSlideInFromRight.style.transform = `translate(${zoomOriginalRight = zoomOriginalRight - slideSpeed}%, 0px)`;
    } else if (window.pageYOffset === 0) {
        zoomElement.style.transform = `scale(  ${originalZoom = originalZoom - zoomSpeed},  ${originalZoom = originalZoom - zoomSpeed})`;
        zoomElement.style.transform = `scale(1,1)`;
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

//# sourceMappingURL=index.c719088e.js.map
