const express = require('express');
const router = express.Router();
const fs = require("fs");
const list = JSON.parse(fs.readFileSync("./public/data/top_10.json","utf8"));

router.get('/',(req,res,next) => {
    res.json(list);
});

module.exports = router;