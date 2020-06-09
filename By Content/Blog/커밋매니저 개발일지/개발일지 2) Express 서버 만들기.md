안녕하세요. 커밋매니저 어플리케이션 개발일지 두번째입니다.

오늘은 Express 서버를 만들어보겠습니다.

Express는 node.js에서 인기 많고 흔히 사용되는 프레임워크 중 하나입니다.

바닐라 자바스크립트로, 혹은 다른 프레임워크를 사용하여 만들 수도 있었지만, node.js 서버 개발을 처음 해보는 저이기에 가장 무난한 Express로 시작하도록 하겠습니다.

우선 루트 폴더를 생성해줍시다.

express init이라는 명령어를 사용하면 기본 프로젝트 생성에 필요한 디렉토리와 git 설정 등, 여러가지를 한번에 할 수 있습니다.

우선 그 전에, express를 글로벌 옵션으로 설치해 봅시다(node가 기본적으로 설치되어 있다고 가정하겠습니다).

`$npm install express-generator -g`

그 다음에, 기초 프로젝트를 생성해 봅시다. 리액트의 CRA를 설치한 것과 비슷하다고 생각하시면 되겠습니다.

`$express server`

[##_Image|kage@bBAA2V/btqDRvWJiE6/ie6hrF2fdA0laQYNo3WXsK/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

한번 디렉토리를 뜯어봅시다.

[##_Image|kage@pXRFT/btqDRwagGmd/zmXkCfJY9RWrizCWsoTYwK/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

views, routes, public 등등.. 각자의 역할을 하는 디렉토리가 있지만, 이거는 나중에 다루도록 하고

이번 포스팅에서는 익스프레스 서버를 구동하는 데 초점을 맞춰보겠습니다.

app.js에 들어가보면,

```
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```

이렇게 다양한 설정이 기본적으로 되어있습니다.

하지만, 우리는 처음부터 서버를 구축해보면서 공부해볼 입장이기 때문에 싹 다 지우고, 처음부터 다시 시작해 봅시다.

app.js를 다음과 같이 수정해 봅시다.

```
const express = require('express');

const app = express();

// #1
app.set('port', process.env.PORT || 3001);

// #2
app.listen(app.get('port'), () => { 
    console.log('익스프레스 서버를 시작합니다, Port : ' + app.get('port'));
});
```

가장 기본적인 서버 세팅입니다.

포트 번호는 겹치지 않는 선에서 자유롭게 하셔도 충분합니다.

**#1**

app.set()은 서버의 기본 설정을 해준다고 보시면 되겠습니다. 해당 코드는 process.env에 따로 설정해 둔 PORT 값이 있다면 그 포트로 설정하고, 따로 설정해 놓은 게 없다면 3001포트로 설정하겠다는 뜻입니다.

**#2**

app.set()에서 설정한 내용을 get()으로 꺼내올 수 있습니다.

다음 코드는 app.set()에서 설정한 포트에 서버를 시작한다는 코드 입니다.

이제, 터미널에 해당 app.js를 시작해 봅시다.

하지만, 아직 express 기초 프로젝트 설정은 하였으나 express 모듈을 다운받은 상태는 아닙니다.

`$npm install`

명령으로 모듈을 설치해줍시다.

그 다음,

`$node app.js`

로 서버를 시작해 봅시다.

[##_Image|kage@bKYXTq/btqDUSJrzHs/aYoFerqDS86yVk6CKVNHz1/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

이렇게 로그가 찍히면 서버를 구동하는 데 성공한 것입니다!

그 다음 포스팅에서는 각종 서버 기초 설정과, 클라이언트에 REST로 넘겨주기 위한 라우트 설정을 해보도록 하겠습니다.