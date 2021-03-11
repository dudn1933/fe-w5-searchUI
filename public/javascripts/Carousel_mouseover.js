import _ from "./utill.js";

const cursor = _.$(".slider_box");
const SLIDER_BOX = ".slider_box"
const RIGHT_BUTTON = _.$(".right_button");
const LEFT_BUTTON = _.$(".left_button");
const CAROUSEL_RIGHT_IMG = "carousel_right_img";
const CAROUSEL_LEFT_IMG = "carousel_left_img";
const CHANGE_RIGHT = "right_button";
const CHANGE_LEFT = "left_button";
const RIGHT_BUTTON_CURSOR = "right_button_cursor";
const LEFT_BUTTON_CURSOR = "left_button_cursor";

cursor.addEventListener("mouseover", IN_CURSOR);
cursor.addEventListener("mouseout", OUT_CURSOR);

function IN_CURSOR() {
    _.removeClass(RIGHT_BUTTON,CHANGE_RIGHT);
    _.addClass(RIGHT_BUTTON,CAROUSEL_RIGHT_IMG);
    _.removeClass(LEFT_BUTTON,CHANGE_LEFT);
    _.addClass(LEFT_BUTTON,CAROUSEL_LEFT_IMG);
    RIGHT_BUTTON.addEventListener("mouseover", RIGHT_IN_BUTTON_CURSOR);
    LEFT_BUTTON.addEventListener("mouseover", LEFT_IN_BUTTON_CURSOR);
};

function OUT_CURSOR() {
    _.addClass(RIGHT_BUTTON,CHANGE_RIGHT);
    _.removeClass(RIGHT_BUTTON,CAROUSEL_RIGHT_IMG);
    _.addClass(LEFT_BUTTON,CHANGE_LEFT);
    _.removeClass(LEFT_BUTTON,CAROUSEL_LEFT_IMG);
    RIGHT_BUTTON.addEventListener("mouseout", OUT_BUTTON_CURSOR);
    LEFT_BUTTON.addEventListener("mouseout", OUT_BUTTON_CURSOR);
};

function RIGHT_IN_BUTTON_CURSOR() {
    _.removeClass(RIGHT_BUTTON,CHANGE_RIGHT);
    _.removeClass(RIGHT_BUTTON,CAROUSEL_RIGHT_IMG);
    _.addClass(RIGHT_BUTTON,RIGHT_BUTTON_CURSOR);
};

function LEFT_IN_BUTTON_CURSOR() {
    _.removeClass(LEFT_BUTTON,CHANGE_LEFT);
    _.removeClass(LEFT_BUTTON,CAROUSEL_LEFT_IMG);
    _.addClass(LEFT_BUTTON,LEFT_BUTTON_CURSOR);
}

function OUT_BUTTON_CURSOR() {
    _.removeClass(LEFT_BUTTON,LEFT_BUTTON_CURSOR);
    _.removeClass(RIGHT_BUTTON,RIGHT_BUTTON_CURSOR);
};