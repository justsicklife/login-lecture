"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
app.set("views","./views");
app.set("view engine" ,"ejs");

const home = require("./routes/home");

app.use("/",home); // use -> 미들웨어 등록하는 메서드.

module.exports = app;