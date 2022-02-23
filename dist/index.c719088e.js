const box = document.querySelector('.company__strength');
const zoomElement = document.querySelector('.company__title');
const zoomElementContainer = document.querySelector('#container');
const zoomPoint = document.querySelector('.zoom__point');
const textSlideInFromRight = document.querySelector('.text__1');
const textSlideInFromLeft = document.querySelector('.text__2');
let zoomOriginalLeft = 70;
let zoomOriginalRight = -70;
let slideSpeed = 0.7;
let originalZoom = 4;
let zoomSpeed = 0.1;
let zoomAddition = 10;
document.addEventListener('scroll', function(e, scale = 1, fit = false) {
    let body = document.body;
    console.log(window.innerHeight);
    const windownHeight = window.innerHeight;
    // let boxProp = box.getBoundingClientRect();
    // const isInViewOrNot = boxProp.top >= 0 && 
    // boxProp.left >= 0 && 
    // boxProp.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
    // boxProp.right <= (window.innerWidth || document.documentElement.clientWidth)
    // console.log(isInViewOrNot)
    zoomElement.classList.add('transform__origin');
    // zoomElement.style.paddingLeft = `${zoomAddition += 0.1}px`;
    console.log(zoomElement.style.paddingLeft);
    zoomElement.style.transform = `scale(  ${zoomAddition + (originalZoom = originalZoom + zoomSpeed)},  ${zoomAddition + (originalZoom = originalZoom + zoomSpeed)})`;
    textSlideInFromLeft.style.transform = `translate(${zoomOriginalLeft = zoomOriginalLeft - slideSpeed}%, 0px)`;
    textSlideInFromRight.style.transform = `translate(${zoomOriginalRight = zoomOriginalRight + slideSpeed}%, 0px)`;
});

//# sourceMappingURL=index.c719088e.js.map
