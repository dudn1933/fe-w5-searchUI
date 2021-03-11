import _ from "./utill.js";
const TRANS_RIGHT = "trans_right";
const TRANS_LEFT = "trans_left";
const ON = "on";
const carouselSlide = _.$(".carousel_slide");
const RIGHT = _.$(".right"); 
const LEFT = _.$(".left");


RIGHT.addEventListener('click', (e) => {
    _.addClass(carouselSlide,TRANS_RIGHT,ON);
    setTimeout(() => {
        _.removeClass(carouselSlide,TRANS_RIGHT,ON);
        carouselSlide.insertBefore(carouselSlide.firstElementChild, null);
    },300)
});


LEFT.addEventListener("click", () => {
    carouselSlide_.addClass(TRANS_LEFT);
    carouselSlide_.addClass(ON);
    setTimeout(() => {
        _.removeClass(carouselSlide,TRANS_LEFT,ON);
        carouselSlide.insertBefore(carouselSlide.lastElementChild,carouselSlide.firstElementChild);
    },300)
});