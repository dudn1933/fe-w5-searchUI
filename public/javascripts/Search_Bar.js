import _ from "./utill.js";

// 이것들을 따로 utill에 모아놔라 
const rolling_list_box = _.$(".rolling_list_box");
const input_box = _.$(".search_bar");
const search_input = _.$(".search_input");
const search_bar_list = _.$(".search_bar_list");
const lists = _.$all(".lists");
const keyword_search_list_box = _.$(".keyword_search_list_box");
const keyword_search_list = _.$(".keyword_search_list");

const bar_color = "search_bar_color";
const display_off = "display_off";
const TRANS_TOP = "trans_top";
const ON = "on";

let count;

export const View_top10_list = (titles) => {
    // for => forEach 로 수정 완료
    const top_list = titles.top_10.list;
    top_list.forEach((value,index) => {
        lists[index].innerHTML = `<a href="#">${value.rank} ${value.title}</a>`;
    })
}

// 검색어 배열로 반환 후 화면에 표시
const View_search_keywords = (word, search_keyword) => {
    const lists = word.suggestions.map(v => v.value); // 배열에는 검색어에 해당하는 list만 담겨있다.
    const str = lists.reduce((acc,cur) => {
        let change = cur.replace(search_keyword, `<span class="search_keyword_color">${search_keyword}</span>`);
        acc = acc + `<li class="keyword_search_lists">${change}</li>`;
        return acc;
    },"");
    keyword_search_list.innerHTML = str;
    return lists;
}

export const Rolling_slide_top10_title = (titles) => {
    // for => reduce로 수정완료
    const top_list = titles.top_10.list;
    const str = top_list.reduce((acc,cur) => {
        acc = acc + `<div class="rolling_list">${cur.rank} ${cur.title}</div>`;
        return acc;
    },"");
    rolling_list_box.insertAdjacentHTML("beforeend",str)
}

export const Rolling_slide = () => {
    // 재귀함수 사용하여 계속 반복
    setTimeout(() => {
        _.addClass(rolling_list_box, TRANS_TOP,ON);
        setTimeout (() => {
            rolling_list_box.insertBefore(rolling_list_box.firstElementChild, null);
            _.removeClass(rolling_list_box, TRANS_TOP,ON);
            Rolling_slide();
        },300);
    },2000);
}

export const init_searchBar_Event = () => {
    document.addEventListener("click", (e) => {
        let close = !!e.target.closest(".search_bar");
        let contain = _.contains(input_box, bar_color);
        
        if(close && !contain) {
            _.addClass(input_box,bar_color);
            _.removeClass(search_bar_list,display_off);
            if(search_input.value !== "") {
                _.removeClass(keyword_search_list_box,display_off);
            }
        }
    })

    document.addEventListener("mouseover", (e) => {
        let close = !!e.target.closest(".search_bar");
        let box_in = e.target.closest(".search_bar_list");
    
        if(!close && !box_in) {
            _.removeClass(input_box, bar_color);
            _.addClass(search_bar_list,display_off);
            _.addClass(keyword_search_list_box,display_off);
            if(search_input.value === "") {
                _.addClass(keyword_search_list_box, display_off);
            } else if(close && box_in && search_input.value !== "") {
                _.removeClass(keyword_search_list_box,display_off);
            }
        }
    })
    
    search_input.addEventListener("input", (e) => {
        if(e.data !== null) {
            _.addClass(rolling_list_box, display_off);
            _.removeClass(keyword_search_list_box,display_off);
        } else if(search_input.value == "") {
            _.removeClass(rolling_list_box,display_off);
            _.addClass(keyword_search_list_box,display_off);
        }
    
        if(count) clearTimeout(count);
        count = setTimeout(() => {
            fetch(`https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${e.target.value}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`)
            .then(response => response.json())
            .then(json => View_search_keywords(json, e.target.value));
        },0);
    })
}