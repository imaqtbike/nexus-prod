const box = document.querySelector('.company__strength');
const zoomElement = document.querySelector('.company__title');
const textSlideInFromRight = document.querySelector('.text__1');
const textSlideInFromLeft = document.querySelector('.text__2');
let zoomOriginalLeft = 70;
let zoomOriginalRight = -70;
let slideSpeed = 1;
let originalZoom = 0;
let zoomSpeed = 0.9;
document.addEventListener('scroll', function(e) {
    // let boxProp = box.getBoundingClientRect();
    // const isInViewOrNot = boxProp.top >= 0 && 
    // boxProp.left >= 0 && 
    // boxProp.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
    // boxProp.right <= (window.innerWidth || document.documentElement.clientWidth)
    // console.log(isInViewOrNot)
    zoomElement.classList.add('transform__origin');
    zoomElement.style.transform = `scale(  ${10 + (originalZoom = originalZoom + zoomSpeed)},  ${10 + (originalZoom = originalZoom + zoomSpeed)})`;
    textSlideInFromLeft.style.transform = `translate(${zoomOriginalLeft = zoomOriginalLeft - slideSpeed}%, 0px)`;
    textSlideInFromRight.style.transform = `translate(${zoomOriginalRight = zoomOriginalRight + slideSpeed}%, 0px)`;
});

//# sourceMappingURL=index.c719088e.js.map
