###### 리액트 입문 포스팅은 '리액트를 사용하는 기술' 책으로 시작했음을 밝힙니다.

# JSX란?

저번 [포스팅](https://enfanthoon.tistory.com/100)에서 리액트 서버를 구동하는 데 까지 성공하였습니다.

생성했던 리액트 프로젝트 경로에 /src/app.js를 들어가봅시다.

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

자바스크립트 같지만 다소 낯선 코드가 보입니다.

이는 JSX라는 자바스크립트의 확장 문법입니다. 이러한 코드는 좀 낯설죠?

2017년부터 자바스크립트에서도 import를 사용할 수 있지만, 이는 단순히 다른 경로에 있는 자바스크립트 불러오는 용도이지, 모듈을 불러오는 기능은 아니었습니다.

하지만 Node.js에서는 require라는 구문으로 패키지를 불러올 수 있습니다. 이러한 기능을 브라우저에서도 사용하기 위해 bundler라는 것을 사용합니다. 리액트는 /src/index.js를 시작으로 필요한 모듈/패키지를 불러와서 번들링하게 됩니다. 따라서 리액트를 불러오는 첫번째 줄의 코드 외에도, .svg파일이나 .css파일도 불러올 수 있게 되는 것이죠.

특히 리액트는 웹팩이라는 번들러를 사용합니다. 그리고 웹팩 번들러를 통해 최신 자바스크립트 문법)을 ES5 형태로 변환하는 것입니다. 왜 최신버전을 냅두고 ES5로 변환하냐구요?

그거는 아직 최신 웹 브라우저가 아닌 대부분의 구버전 웹 브라우저에서와 호환하기 위해서입니다. 최신 웹 브라우저의 호환은 상관이 없으나, 아직은 ES5 이상을 지원하지 않는 브라우저도 존재하기 때문이죠.

이러한 웹팩의 로더는 지난 포스팅에서 진행했던 create-react-app 과정에서 전부 설치됩니다.

JSX는 리액트로 프로젝트를 개발할 때만 사용되므로 공식적인 자바스크립트 문법은 아닙니다만, '바벨'에서 지원하는 preset/plugin을 통해 임의로 만든 자바스크립트 문법도 사용할 수 있게 됩니다.

그렇다면 굳이 JSX를 써야 하는 이유는 무엇일까요?

JSX로 작성한 코드가 웹팩을 통해 어떻게 변환되는 지 살펴봅시다.

##### JSX

```
  function App() {
    return (
      <div>
          Hello <b>World</b>
      </div>
    );
  }
```

##### 변환 후

```
  function App() {
    return React.createElement("div", null,"Hello", React.createElement("b", null, "react"));
  }
```

딱 보기에도 JSX가 훨씬 간단해지죠? JSX를 사용하는게 아니라 요소를 만들 때 마다 매번 createElement 함수를 사용하면 매우 불편할 것입니다. 게다가 HTML 태그를 자체적으로 사용할 수 있기 때문에(div, a, b 등) 활용도가 매우 높습니다

다음 포스팅에선 이 JSX의 문법을 알아보도록 하겠습니다