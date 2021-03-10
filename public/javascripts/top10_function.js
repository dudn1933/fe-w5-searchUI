import _ from "./utill.js";

const rolling_list_box = _.$(".rolling_list_box");
const input_box = _.$(".search_bar");
const search_input = _.$(".search_input");
const search_bar_list = _.$(".search_bar_list");
const lists = _.$all(".lists");
const keyword_search_list_box = _.$(".keyword_search_list_box");
const keyword_search_list = _.$(".keyword_search_list");

const bar_color = "search_bar_color";
const display_off = "display_off";

let count;

document.addEventListener("click", (e) => {
    let close = !!e.target.closest(".search_bar");
    let contain = input_box.classList.contains("search_bar_color");
    
    if(close && !contain) {
        input_box.classList.add(bar_color);
        search_bar_list.classList.remove(display_off);
        if(search_input.value !== "") {
            keyword_search_list_box.classList.remove(display_off);
        }
    }
})

// search_bar_outline.addEventListener("mouseout", () => {
//     input_box.classList.remove(bar_color);
//     search_bar_list.classList.add(display_off);
// })


document.addEventListener("mouseover", (e) => {
    let close = !!e.target.closest(".search_bar");
    let box_in = e.target.closest(".search_bar_list");

    if(!close && !box_in) {
         input_box.classList.remove(bar_color);
         search_bar_list.classList.add(display_off);
         keyword_search_list_box.classList.add(display_off);
         if(search_input.value === "") {
            keyword_search_list_box.classList.add(display_off);
         } else if(close && box_in && search_input.value !== "") {
            keyword_search_list_box.classList.remove(display_off);
         }
    }
 })

export const top_slide = (titles) => {
    // for => forEach 로 수정 완료
    const top_list = titles.top_10.list;
    top_list.forEach((value,index) => {
        lists[index].innerHTML = `<a href="#">${value.rank} ${value.title}</a>`;
    })
}

export const rolling_keyword = (titles) => {
    // for => reduce로 수정완료
    const top_list = titles.top_10.list;
    const str = top_list.reduce((acc,cur) => {
        acc = acc + `<div class="rolling_list">${cur.rank} ${cur.title}</div>`;
        return acc;
    },"");

    rolling_list_box.insertAdjacentHTML("beforeend",str)
}

search_input.addEventListener("input", (e) => {
    if(e.data !== null) {
        rolling_list_box.classList.add(display_off);
        keyword_search_list_box.classList.remove(display_off);
    } else if(search_input.value == "") {
        rolling_list_box.classList.remove(display_off);
        keyword_search_list_box.classList.add(display_off);
    }

    if(count) clearTimeout(count);
    count = setTimeout(() => {
        fetch(`https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${e.target.value}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`)
        .then(response => response.json())
        .then(json => keyword_search(json));
    },0);
})

// 검색어 배열로 반환 후 화면에 표시
const keyword_search = (word) => {
    const lists = word.suggestions.map(v => v.value); // 배열에는 검색어에 해당하는 list만 담겨있다.
    const str = lists.reduce((acc,cur) => {
        acc = acc + `<li class="keyword_search_lists">${cur}</li>`;
        return acc;
    },"");
    
    keyword_search_list.innerHTML = str;
}