안녕하세요~ 😃

오늘은 API를 호출 URI를 생성하기 위한 라우팅 설정을 해보도록 하겠습니다.

그 전에, 커밋매니저에서 사용할 기능에 대한 검토가 필요한데요. 우선 저희 기획 단계에서는 커밋매니저 프로로타입 버전의 기능을 다음으로 정하기로 했습니다.

**1\. 사용자의 api 활용을 위한 토큰을 얻는 과정에서, 직접 personal access token을 발급해 입력하는 것이 아닌 OAuth 인증을 통해 구현한다.**

**2\. 사용자의 오늘 날짜에 해당하는 커밋을 카운트해서 알려주고, 금일 커밋이 없을 경우 사용자가 지정한 시간에 알람을 보내준다.**

**3\. 사용자가 로그인한 계정의 정보를 알 수 있도록, 프로필 사진, 팔로워, 팔로잉 수 등의 정보를 사용자에게 보여준다.**

기본적으로 HTTP 통신의 서버 형태에서 클라이언트가 서버에 요청하려면 각 기능마다 가르키는 uri이 존재해야겠죠?

그렇기 때문에 우리는 기능별로 따로 라우팅을 구현하여 줄 겁니다.

예를 들면,

**서버URL/commit** 으로 요청하면 커밋 정보가,

**서버URL/userinfo** 으로 요청하면 사용자의 개인 정보가 나오는 식으로 구현하면 되겠습니다.

커밋매니저 서버의 경우 따로 express-cli를 이용하지 않았죠.

그 이유는 너무나도 간단한 서버이기 때문에 views와 ejs 템플릿 등이 전혀 필요하지 않기 때문입니다.

우리는 그 중에서 routes 폴더의 기능만 사용해도 무방합니다.,

우선 서버의 루트 폴더에 routes라는 기본 폴더를 만들어 줍니다.

그리고 하위에 index.js commit.js userinfo.js를 만들어 줍시다.

각 라우팅에 접근하였을 때의 기능에 대한 구현은 api를 받아오는 미들웨어를 따로 만들어 준 뒤에 할 예정이기 때문에,

오늘은 별도의 기능 없이 라우팅 연결까지만 성공하면 되겠습니다.

우선 commit.js에 다음과 같이 작성해 봅시다.

commit.js

```
const express = require('express');
const router = express.Router();
router.get('/commit', async (req, res) => {
    console.log('/commit 처리 라우팅')
});

module.exports = router;
```

express에서 제공하는 라우터를 사용하면 아주 간단하게 적용할 수 있습니다.

같은 방법으로 userinfo.js도 작성해보겠습니다.

userinfo.js

```
const express = require('express');
const router = express.Router();
router.get('/userinfo', async (req, res) => {
    console.log('/userinfo 처리 라우팅')
});

module.exports = router;
```

두 파일의 공통점은 마지막에 router를 export 해주고 있다는 점입니다. 

이를 서버의 시작 부분인 app.js에 적용해 보겠습니다.

(index.js에 몰아놓고 한번에 import하는 방법도 가능하지만, 라우터의 개수가 적기 때문에 우선은 다음과 같이 구현했습니다)

app.js

```
const express = require('express');
const commitRouter = require('./routes/commit');
const userinfoRouter = require('./routes/userinfo');

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use('/', commitRouter);
app.use('/', userinfoRouter);

app.listen(app.get('port'), () => { 
    console.log('익스프레스 서버를 시작합니다, Port : ' + app.get('port'));
});
```

export해준 라우터를 각각 받아와 주고, app.use를 통해 인스턴스에 적용해 줍니다.

그런 다음에 서버를 구동하고 직접 로컬 url에 접근해 볼까요 ?

```
$ node app.js
```

http://localhost:3001/commit에 접근해 봅시다.

[##_Image|kage@pU1rM/btqEG96o6N0/oLPJ0y61M6JKmHHIDu7AIK/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

다음과 같은 로그가 서버 단에서 찍히나요 ?

그러면 라우팅이 성공적으로 적용된 것입니다.

다음 포스팅에서는 Github api를 이용하여 라우팅에 기능을 적용해 보도록 하겠습니다.