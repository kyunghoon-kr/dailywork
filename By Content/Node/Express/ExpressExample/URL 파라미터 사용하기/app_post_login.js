// Express 불러오기

const express = require('express')
    , http = require('http')
    , path = require('path');

// Express 미들웨어 불러오기

const bodyParser = require('body-parser');
const static = require('serve-static');

// 익스프레스 객체 생성
const app = express();

app.set('port', process.env.PORT || 3000);

// body-parser를 사용하여 application/x-www-form-urlencoded 파싱
// 가장 일반적인 요청 파라미터 형식
app.use(bodyParser.urlencoded({ extended: false }));

// bodyParser를 이용하여 application/json 파싱
app.use(bodyParser.json());

// static 미들웨어를 이용하여 프로젝트 내부 파일을 url로 접근할 수 있게 한다
// app.use('/public', express.static(__dirname + '/public'));

app.use(express.static('public'));
// 위의 것으로 수정하여 사용해야 함
// app.use('/public',static('public'));

// 라우터
const router = express.Router();
// 라우팅 함수 등록
router.route('/process/login:name').post((req, res) => {
    console.log('/process/login:name 처리');
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;
    console.log(paramId, paramPassword);
    res.writeHead('200', {'Content-Type': 'text/html; charset=utf-8;'});
    res.write('<h1>익스프레스 서버에서 응답한 결과입니다 </h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write('<br><br><a href=/public/login3.html>로그인 페이지로 돌아가기</a>');
});
// 미들웨어에서 파라미터 확인
app.use('/', router);

// 익스프레스 서버 시작
http.createServer(app).listen(app.get('port'), () => { // app.get('port')에서 위에서 set()으로 지정한 속성을 불러온다.
    // 서버 시작 시의 콜백 함수
    console.log('익스프레스 서버를 시작합니다' + app.get('port'));
});


