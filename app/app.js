"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
app.set("views","./src/views");
app.set("view engine" ,"ejs");
console.log(__dirname);
app.use(express.static(`${__dirname}/src/public`))

const home = require("./src/routes/home");

app.use("/",home); // use -> 미들웨어 등록하는 메서드.

module.exports = app;