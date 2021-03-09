import _ from "./utill.js";
const TRANS_RIGHT = "trans_right";
const TRANS_LEFT = "trans_left";
const ON = "on";
const carouselSlide = _.$(".carousel_slide");
const RIGHT = _.$(".right"); 
const LEFT = _.$(".left");


RIGHT.addEventListener('click', (e) => {
    carouselSlide.classList.add(TRANS_RIGHT);
    carouselSlide.classList.add(ON);
    setTimeout(() => {
        carouselSlide.classList.remove(ON);
        carouselSlide.classList.remove(TRANS_RIGHT);        
        carouselSlide.insertBefore(carouselSlide.firstElementChild, null);
    },300)
});


LEFT.addEventListener("click", () => {
    carouselSlide.classList.add(TRANS_LEFT);
    carouselSlide.classList.add(ON);
    setTimeout(() => {
        carouselSlide.classList.remove(ON);
        carouselSlide.classList.remove(TRANS_LEFT);        
        carouselSlide.insertBefore(carouselSlide.lastElementChild,carouselSlide.firstElementChild);
    },300)
});