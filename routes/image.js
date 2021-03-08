import express from 'express';
import fs from "fs";

const router = express.Router();
const data = JSON.parse(fs.readFileSync("./public/data/response.json","utf8"));

router.get('/', (req,res, next) => {
    // req = 클라이언트 main.js 의 fetch 요청을 받음
    // res = fetch 요청에 대한 응답을 보냄
    res.json(data);
});

export default router;