import { best, carousel, mouse_slide, plus } from "./carousel_function.js";
import { top_slide, rolling_keyword } from "./top10_function.js";

const promise = fetch("http://localhost:3000/image") // 여기서 서버에 요청함                                                
.then(response => response.json())                   // 그럼 router의 image.js에서 파일을 읽어서 보내줌. 
.then(json => {
    best(json);
    carousel(json);
    mouse_slide(json);
    plus(json);
});

const top_10 = fetch("http://localhost:3000/top_10") // 여기서 서버에 요청함                       
.then(response => response.json())                   // 그럼 router의 image.js에서 파일을 읽어서 보내줌. 
.then(json => { 
    top_slide(json);
    rolling_keyword(json);
});
