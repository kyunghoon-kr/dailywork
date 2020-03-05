// Express 불러오기

const express = require('express')
    , http = require('http');

// import express from 'express'
// import http from 'http';

// 익스프레스 객체 생성
const app = express();

// 기본 포트를 익스프레스(app) 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);
// env 객체에 PORT 속성이 따로 정해져 있다면 그걸 사용하고, 그렇지 않다면 3000을 포트 번호로 지정하겠다는 뜻

// 익스프레스 서버 시작
http.createServer(app).listen(app.get('port'), () => { // app.get('port')에서 위에서 set()으로 지정한 속성을 불러온다.
    // 서버 시작 시의 콜백 함수
    console.log('익스프레스 서버를 시작합니다' + app.get('port'));
});


