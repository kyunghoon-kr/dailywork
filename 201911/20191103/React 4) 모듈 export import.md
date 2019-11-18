# 모듈 Import / Export

리액트 프로젝트를 생성하면, 자동으로 src 폴더 내에 Index.js와 App.js가 생성됩니다.

자바스크립트로 웹 페이지를 자주 제작해보신 분들은 알겠지만, index.js는 최초 진입 시 실행되는, main의 역할을 하는 부분입니다.

실제로 리액트에서의 index.js를 살펴볼까요?

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

이렇게 index.js에서는 기본적으로 같은 경로 내의 App.js를 불러와 (4번째 줄 참고) 그 App.js의 return 값을 렌더링합니다.

기본적으로 App.js에서 작성한 return 문을 ReactDOM에 렌더링하면서 우리가 맨처음 리액트 서버를 구동하였을 때 떴었던 페이지가 뜨는 것이죠. 이렇게 리액트에서는 js파일을 모듈화하여 import/export하는 식으로 원하는 페이지를 렌더링/리렌더링합니다.

그렇다면, App.js 말고 우리가 직접 만든 js파일을 리액트 서버 페이지에 띄워보도록 해봅시다.

우선, 같은 경로 내에 js파일을 만들어주세요. 저는 MyComponent.js로 만들겠습니다.

그리고 우리가 저번 포스팅에서 다루었던 code snippets를 통해, 클래스형 컴포넌트를 하나 만들어볼게요.

##### MyComponent.js

```
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                이걸 불러올거야!
            </div>
        );
    }
}

export default MyComponent;
```

맨 마지막 부분에 export 구문이 보이시나요?

export는 다른 파일에서 이 파일을 import 할 때, 위에서 선언한 MyComponent를 불러오도록 설정합니다.

그러면 자동으로 return값을 반환하게 되고, index.js에서는 이 반환 값을 바탕으로 ReactDOM을 렌더링하겠죠?

이제, 다시 index.js로 갑시다.

`ReactDOM.render(<App />, document.getElementById('root'));`

에서 App -> (내가 설정한 js파일 이름)으로 설정해 줍시다.

그러면 킹동완성에 의하여,

MyComponent.js에서 자동으로 가져오게끔 됩니다. 그러면 자동으로 index.js에 import 구문도 추가되게 됩니다.

이제 index.js에서 MyComponent.js를 불러와 렌더링하도록 설정되었으니, 파일을 저장해주면 자동으로

리액트 페이지가 변환됩니다.

이러한 페이지가 뜨게 되면 정상적으로 모듈을 Import/Export하게 된 것입니다!!