// Express 불러오기

const express = require('express')
    , http = require('http');

// import express from 'express'
// import http from 'http';

// 익스프레스 객체 생성
const app = express();


app.use((req, res, next) => {
    console.log('첫번 째 미들웨어에서 요청을 처리함')
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
    
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>')
    res.write('<div><p>User-Agent : ' + userAgent + '</p></div>')
    res.write('<div><p>Param name : ' + paramName + '</p></div>')

    res.end(); // 요청 전송
})

// 익스프레스 서버 시작
http.createServer(app).listen(3000, () => {
    // 서버 시작 시의 콜백 함수
    console.log('익스프레스 서버를 시작합니다');
});


