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
let slideSpeed = 0.5;
let originalZoom = 0.5;
let zoomSpeed = 0.5;
let zoomAddition = 1;
let lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        // downscroll code
        zoomElement.style.transform = `scale(  ${originalZoom = originalZoom + zoomSpeed},  ${originalZoom = originalZoom + zoomSpeed})`;
        textSlideInFromLeft.style.transform = `translate(${zoomOriginalLeft = zoomOriginalLeft - slideSpeed}%, 0px)`;
        textSlideInFromRight.style.transform = `translate(${zoomOriginalRight = zoomOriginalRight + slideSpeed}%, 0px)`;
    } else {
        // upscroll code
        zoomElement.style.transform = `scale(  ${originalZoom = originalZoom - zoomSpeed},  ${originalZoom = originalZoom - zoomSpeed})`;
        textSlideInFromLeft.style.transform = `translate(${zoomOriginalLeft = zoomOriginalLeft + slideSpeed}%, 0px)`;
        textSlideInFromRight.style.transform = `translate(${zoomOriginalRight = zoomOriginalRight - slideSpeed}%, 0px)`;
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

//# sourceMappingURL=index.c719088e.js.map
