# JSX 문법



### 요소를 감싸야 한다



컴포넌트에 여러 요소가 있다면, 그 요소는 부모 요소에 의해 감싸져 있어야 합니다. 



```javascript
import React from 'react';

function App() {
    return (
    	<h1>h1</h1>
        <h2>h2</h2>
    )
}

export default App;
```



다음 코드의 경우 제대로 작동하지 않습니다. 이를 실행해 보면 다음과 같은 오류가 뜹니다.



그림



다음과 같은 오류는 h1와 h2를 동시에 감싸주는 코드를 작성하여 해결할 수 있습니다.



```javascript
import React from 'react';

function App() {
    return (
        <div>
            <h1>h1</h1>
            <h2>h2</h2>
        </div>
    )
}

export default App;
```



왜 꼭 부모 요소로 감싸주어야 할까요? 그 이유는 Virtual DOM을 사용해야 한다는 리액트의 특성 때문입니다. Virtual DOM에서 컴포넌트를 변화하여 바뀐 부분만 리렌더링 한다고 했죠? 그 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다.



<br>



하지만 여기서 꼭 div를 사용하지 않고 `Fragment`라는 기능을 사용해도 됩니다.



단, 별도의 import가 필요합니다.



```javascript
import React, { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <h1>h1</h1>
            <h2>h2</h2>
        </Fragment>
    )
}

export default App;
```



Fragment의 좋은 점은, 다음과 같이 생략해서 사용할 수도 있다는 것입니다.



```javascript
import React from 'react';

function App() {
    return (
        <>
            <h1>h1</h1>
            <h2>h2</h2>
        <>
    )
}

export default App;
```



간단하죠?



<br>



### 자바스크립트 표현식 사용



JSX는 Virtual DOM을 통해 렌더링하는 기능이 있을 뿐 아니라, 자바스크립트의 확장 문법답게 자바스크립트의 표현식도 쓸 수 있습니다.



##### 문자열 보간



```javascript
import React from 'react';


function App() {
  const name ='리액트';
  return (
    <>
      <h1>{name} 공부 중!</h1>
      <h2>쉽죠? </h2>
    </>
  )
}

export default App;

```



<br>



### 조건부 연산자



JSX에서는 if문 대신 조건부 연산자(삼항 연산자)를 사용합니다. 



조건부 연산자는 `{}`와 `:`를 활용하여 만듭니다. 한번 예를 볼까요?



```javascript
import React from 'react';


function App() {
  const name ='리액트';
  return (
    <>
      {name === '리액트' ? (
        <h1> 리액트 맞음! </h1>
      ) : (
        <h2> 리액트 아님! </h2>
      )}
    </>
  )
}

export default App;
```



모든 조건 연산자는 `{}` 안에 작성되며, ?이전의 조건식이 맞다면 h1 요소가, 그렇지 않다면 `:` 이후의 h2 요소가 출력될 것입니다. `:`가 else의 역할을 한다고 보면 쉽겠네요!

이 조건식의 경우 name이 '리액트' 이기 때문에 `h1` 요소가 화면에 나타납니다~



<br>



### undefined를 렌더링하지 않는다.



리액트 컴포넌트에서 함수는 null을 반환하여 렌더링 하게 하는 경우는 있을 수 있으나(이 경우 아무것도 화면에 나타나지 않겠죠?), undefined를 반환하여 렌더링하는 경우 컴파일 에러가 발생하게 됩니다.

따라서 어떠한 값이 undefined일 가능성이 있다면, OR 연산자를 통해 오류를 방지할 수 있습니다.



```javascript
import React from 'react';
import './App.css';

function App() {
  const name = undefined;
  return <div>{name || '리액트'}</div>;
}

export default App;

```



다음 코드의 경우 name은 undefined이기 때문에 undefined를 return하여 오류가 발생하는 것이 아닌,

`<div> 리액트 </div>` 을 return 할 것입니다.



<br>



### 인라인 스타일링



JSX에서는 스타일링 적용 시에 객체 형태로 넣어 주어야 합니다. 특히 스타일 이름 중 background-color처럼 `-` 문자가 포함되는 경우 `-`문자를 없애고 표기하는 `카멜 표기법`으로 작성합니다.

따라서 background-color는 backgroundColor로 작성해야 합니다.



##### 카멜 표기법

```javscript
.react {
	backgroundColor: 'black',
	fontSize: '48px'
}
```



<br>



### 태그를 꼭 닫아야 한다



원래 HTML에서는 가끔 태그를 닫지 않은 채로 코드를 작성하기도 합니다.



하지만 리액트는 Virtual 'DOM' 이라고 했죠. XML에서 DOM으로 작성되어 태그를 닫아주지 않으면 오류가 뜨듯 태그를 열었으면 반드시 닫아주어야 합니다.



```javascript
import React from 'react';
import './App.css';

function App() {
  return <a> 컴파일 에러!
}

export default App;
```



<br>



단, 태그 사이에 별도의 내용이 들어가지 않으면 다음과 같이 표시할 수는 있습니다.



```javascript
import React from 'react';
import './App.css';

function App() {
  return <input />
}

export default App;
```



<br>



### 주석



JSX에서의 주석은 일반 자바스크립트에서의 주석과 다릅니다.



`/* 주석 */`



`// 주석`



과 같은 형태는 모두 페이지에 그대로 나타나며, 제대로 주석을 작성하기 위해서는



`{/* 주석 */}` 과 같은 형태로 작성합니다.

