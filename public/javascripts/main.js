import { best, carousel, mouse_slide, plus } from "./function.js";

const promise = fetch("http://localhost:3000/image") // 여기서 서버에 요청함
                                                     // 그럼 router의 image.js에서 파일을 읽어서 보내줌. 
.then(response => response.json())
.then(json => {
    best(json);
    carousel(json);
    mouse_slide(json);
    plus(json);
});

const top_10 = fetch("http://localhost:3000/top_10") // 여기서 서버에 요청함
                                                     // 그럼 router의 image.js에서 파일을 읽어서 보내줌. 
.then(response => response.json())
.then(json => { console.log(json) });