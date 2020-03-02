const http = require("http");

const server = http.createServer();

// 웹 서버를 시작하여 192.168.25.27와 3000번 포트에서 대기하도록 설정.
const host = '192.168.0.5';
const port = 3000; // 포트 번호

server.listen(port, host, function() { // 웹 서버가 실행되면 시작될 콜백 함수를 전달
    console.log('웹 서버가 시작되었습니다!');
});