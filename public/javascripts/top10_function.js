import _ from "./utill.js";

const rolling_list_box = _.$(".rolling_list_box");
const input_box = _.$(".search_bar");
const search_input = _.$(".search_input");
const search_bar_list = _.$(".search_bar_list");
const lists = _.$all(".lists");

const bar_color = "search_bar_color";
const search_bar_list_off = "search_bar_list_off";

document.addEventListener("click", (e) => {
    let close = e.target.closest(".search_bar") ? true : false;
    let contain = input_box.classList.contains("search_bar_color");

    if(close && !contain) {
        input_box.classList.add(bar_color);
        search_bar_list.classList.remove(search_bar_list_off);
    }
})

document.addEventListener("mouseover", (e) => {
    let close = e.target.closest(".search_bar") ? true : false;
    let box_in = e.target.closest(".search_bar_list");

    if(!close && !box_in) {
         input_box.classList.remove(bar_color);
         search_bar_list.classList.add(search_bar_list_off);
    }
 })

export const top_slide = (titles) => {
    const top_list = titles.top_10.list;

    for(let i=0; i<top_list.length; i++) {
        lists[i].innerHTML = `<a href="#">${top_list[i].rank} ${top_list[i].title}</a>`;
    }
}

export const rolling_keyword = (titles) => {
    const top_list = titles.top_10.list;
    let str = '';

    for(let i=0; i<top_list.length; i++) {
         str += `<div class="rolling_list">${top_list[i].rank} ${top_list[i].title}</div>`;
    }
    rolling_list_box.insertAdjacentHTML("beforeend",str)
}

search_input.addEventListener("input", (e) => {
    console.log(e.value)
    if(e.data !== null) {
        rolling_list_box.classList.add(search_bar_list_off);
    } else if(e.value === undefined) {
        rolling_list_box.classList.remove(search_bar_list_off);
    }
})