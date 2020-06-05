// 모듈추출
const fs = require('fs'); 
var text = '쓰는 text';
// 모듈사용
fs.writeFile('data.txt', text, 'utf8', function (error) { 
     console.log('비동기식 쓰기'); 
}); 
fs.writeFileSync('data.txt', text, 'utf8');
console.log('동기식 쓰기');
var readtext;
fs.readFile('data.txt', 'utf8', function (error, readtext) { 
    console.log('비동기식으로 읽음 :',readtext); 
}); 
try {
    readtext = fs.readFileSync('data1.txt', 'utf8'); 
    console.log('동기식으로 읽음: %s', readtext); 
} catch (error) {
    console.log(error); 
};