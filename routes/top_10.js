import express from 'express';
import fs from "fs";

const router = express.Router();

const list = JSON.parse(fs.readFileSync("./public/data/top_10.json","utf8"));

router.get('/',(req,res,next) => {
    res.json(list);
});

export default router;