// Express 불러오기

const express = require('express')
    , http = require('http');

// import express from 'express'
// import http from 'http';

// 익스프레스 객체 생성
const app = express();


app.use((req, res, next) => {
    console.log('redirect to google');
    res.redirect("http://google.co.kr");
})

// 익스프레스 서버 시작
http.createServer(app).listen(3000, () => { // app.get('port')에서 위에서 set()으로 지정한 속성을 불러온다.
    // 서버 시작 시의 콜백 함수
    console.log('익스프레스 서버를 시작합니다');
});


