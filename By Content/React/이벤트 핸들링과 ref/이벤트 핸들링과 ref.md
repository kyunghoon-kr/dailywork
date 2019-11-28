velopert 님의 '리액트를 사용하는 기술' 교재로 부터 공부한 내용임을 밝힙니다😃  


### **이벤트 핸들링**

안녕하세요

오늘은 저번 포스팅에 이어 리액트의 이벤트 핸들링과 ref에 대해 포스팅합니다.

이전에 리액트에서의 이벤트 핸들링은 HTML에서의 이벤트 핸들링과 유사한 점이 많다고 했는데요.

예전 포스팅에서도 다루었던 onClick 기억하시나요 ? 

이것들도 button DOM에 연결된 이벤트 중 하나라고 할 수 있겠습니다.

오늘은 간단한 예제로 이벤트 핸들링과 ref에 대해 알아보겠습니다!

---

우선, 리액트 프로젝트를 열고 클래스형 컴포넌트를 하나 만들어 줍시다. 

(vscode에서 code snippets을 사용하고 있다면 rcc만 눌러도 클래스형 컴포넌트가 자동완성 됩니다!)

그리고 입력 창 하나와 버튼 하나를 만들어 줍시다.

그리고 입력 창의 값은 state를 통해 전달해 주도록 하구요.

```
import React, { Component } from 'react';

class EventRef extends Component {
    state = {
        text : ''
    }


    render() {
        return (
            <div>
                <input
                value={this.state.text}
                />
                <button>입력</button>
            </div>
        );
     }
}

export default EventRef;
```

뭔가 허전하죠? 이제 버튼에다가 onClick 이벤트를 달아주도록 하겠습니다.

간단하게 자바스크립트의 화살표 함수를 이용하여 코드를 짜봅시다.

state 아래에 다음 코드를 추가해 주세요.

```
handleClick = () => {
    this.setState({
      text: ''
    });
}
```

다소 특이한 형식이죠? 자바스크립트의 화살표 함수라고 하는데, 기존에 알던 람다식과 비슷한 것이라고 생각하시면 될 것 같습니다.

버튼을 클릭하면, 입력창에 입력한 값이 지워지도록 setState 함수를 통해 text를 ''으로 초기화해주는 코드입니다.

이제, 이 선언한 화살표 함수를 버튼에 장착해봅시다!

```
    render() {
        return (
            <div>
                <input
                value={this.state.text}
                />
                <button onClick={this.handleClick}>입력</button>
            </div>
        );
     }

```

하지만 이 코드를 적용시켜도 input창에 텍스트가 입력되지 않습니다.

이는 input의 onChange 이벤트가 작성되어있지 않았기 때문인데요.

handleClick과 마찬가지로, handleChange를 작성한 후 input에 장착시켜 줍시다.

```
handleChange = (e) => {
        this.setState({
        text: e.target.value
        });
}

...

return {
	...
    <input 
    onChange={this.handleChange}
    onClick={this.handleClick}
    ...
    
```

버튼을 클릭하였을 때 텍스트가 지워지면 정상적으로 작동하는 것입니다!

이러한 이벤트를 통하여

마우스/키보드 입력, 클립보드, ui, 휠, 드래그, 이미지 등등의 이벤트를 다룰 수 있게 됩니다!

---

### **Ref**

안드로이드에서 레이아웃을 작성하거나/HTML에서는 특정 컴포넌트/객체마다 id를 다는 경우가 있습니다.

이 id는 unique한 '식별자'로 수많은 컴포넌트 중에서 특정하게 구분하기 위하여 사용합니다.

리액트는 기본적으로 자바스크립트를 기본으로 만들어졌으므로 당연히 id를 사용할 수는 있으나,

리액트는 DOM을 끊임없이 리렌더링하기 때문에, 그러면 똑같은 id를 가진 컴포넌트가 여러 개 생기는 경우가 있습니다.

id의 식별자로서의 'unique'가 보장되지 않게 되는 것입니다.

그렇기 때문에 리액트에서 사용하는 것이 ref 인데요. ref는 내부 컴포넌트에서만 작동하기 때문에 unique를 보장할 수 있습니다.

리액트에서는 state를 통해 DOM에 값을 직접 전달할 수 있기 때문에, 왜 ref가 필요한 지 궁금하실 수 있습니다.

state를 통해 필요한 기능을 구현할 수 있지만, state로는 한계가 있는, DOM을 직접적으로 건드려야 할 경우에 사용하기 위해서 입니다.

아까 만들었던 코드의 Input에 ref를 장착해 봅시다.

ref를 설정하는 방법은 두가지가 있습니다.

**1\. 콜백 함수 활용하기**

```
<input ref={(ref) => {this.input=ref}} />
```

**2\. createRef메소드 활용하기**

```
input = React.createRef();

...

render() {
	...
    <input ref={this.input}>
    ...
}
```

이번 경우에는 코드의 간소화를 위하여, 콜백 함수를 활용해 봅시다. 

input에 ref를 다음과 같이 추가해 줍시다.

```
...
render() {
        return (
            <div>
                <input
                ref={(ref) => this.input=ref}
...
```

이렇게 ref를 달면, 우리가 안드로이드에서 getElementById('id')로 식별할 수 있게 장착해 준 것처럼,

코드 상에서 input을 인식할 수 있게 됩니다.

한번 handleClick 함수에서 테스트를 해볼까요?

handleClick에 다음과 같이 추가해 줍시다.

```
handleClick = () => {
        ...
        console.log(this.input)
        console.log(this.button)
    }
```

그리고, 크롬의 개발자 도구를 이용하여 콘솔창을 볼까요?

[##_Image|kage@H2xTU/btqz26mxacC/TL5rSq2CsKX0mPDqJz5WpK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|_##]

class는 아직 작성하지 않은 코드이니 무시해 줍시다.

input은 콘솔창에서 로그가 띄워지는 반면, ref를 장착하지 않은 button은 undefined로 뜨는것을 확인하셨나요?

이렇듯 ref를 장착해야 컴포넌트 내부에서 해당 DOM을 인식할 수 있게 됩니다.

이제 handleClick에 focus함수를 넣어 볼까요?

```
handleClick = () => {
        ...
        this.input.focus();
    }
```

focus()는 마우스의 포커스를 가져오는 함수입니다.

이제, 텍스트를 입력 후 버튼을 눌렀을 때 텍스트가 지워지고 입력 창으로 포커스가 옮겨간다면 성공한 거에요!

이상으로 포스팅을 마칩니다.