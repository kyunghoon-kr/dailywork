const add = (a, b, callback) => {
    var result = a + b;
    callback(result);
}

add(10, 10, (result) => {
    console.log('파라미터로 전달된 콜백 함수가 계산을 마치고 호출됨');
    console.log('%d',result);
})