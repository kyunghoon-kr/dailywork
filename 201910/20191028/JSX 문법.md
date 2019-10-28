# Var / Const / Let

자바스크립트 ES6 이전에서는 값을 담는 키워드로 var을 사용했습니다.

var키워드는 scope가 함수 단위로, 치명적인 결점이 있습니다.

```
function myFunction() {
    var a = '1';
    if(true) {
        var a = '2';
        console.log(a); // 2
    }
    console.log(a); //2
}
myFunction();
```

맨처음 var 값을 선언하고, if문 내부에서 다른 값으로 선언했습니다. if문 내부에서 새로 선언했음에도 if문 밖에서 a를 조회하면 변경된 값이 나타납니다.



이러한 결점을 해결하기 위하여 let과 const가 등장했습니다.

```
function myFunction() {
    let a = '1';
    if(true) {
        let a = '2';
        console.log(a); // 2
    }
    console.log(a); // 1
}
myFunction();
```

1. let과 const는 scope가 함수 단위가 아닌 블록 단위이므로, if문 내부에서 선언한 a 값은 if문 밖의 a 값을 변경하지 않습니다.
2. const는 한번 선언하면 재설정 할 수 없습니다(상수)
3. let과 const는 같은 블록 내에서 중복 선언이 불가능합니다.

let과 const의 차이점은 let은 선언 후 값이 유동적으로 변할 경우에만 사용하고, const는 한번 설정한 후 변할 일이 없는 값에 사용합니다.

ES6 이후에는 var을 사용할 일이 없으며, 기본적으로 const를 사용하고 해당 값을 바꿔야 할 경우에는 let을 사용하면 되겠습니다.