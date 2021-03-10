import _ from "./utill.js";

const TRANS_TOP = "trans_top";
const ON = "on";
const rolling_list_box = _.$(".rolling_list_box");

setInterval(() => {
    rolling_list_box.classList.add(TRANS_TOP,ON);
    setTimeout (() => {
        rolling_list_box.insertBefore(rolling_list_box.firstElementChild, null);
        rolling_list_box.classList.remove(TRANS_TOP,ON);
    },300)
},3000);