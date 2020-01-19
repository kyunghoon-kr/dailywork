# console 객체



### console.log

- 로그 찍기

  ```javascript
  console.log('안녕하세요');
  console.log('%s', __filename);
  console.log('%s', __dirname);
  ```

  - __filename : 파일의 경로
  - __dirname : 상위 폴더의 경로



### console.time

- 시간 기록

  ```javascript
  var result = 0;
  console.time('duration_sum');
  
  for (var i = 1; i<= 1000; i ++) {
      result += i;
  }
  
  console.timeEnd('duration_sum');
  console.log('1부터 1000까지 더한 결과물 : %d' , result);
  ```



### console.dir

- 객체의 속성 확인

  ```javascript
  var Person = {name:"홍길동", age:20}
  console.dir(Person);
  ```

  

