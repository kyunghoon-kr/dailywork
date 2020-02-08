var http = require('http');
var fs = require('fs');
// 웹 서버를 시작하여 3000번 포트에서 대기하도록 설정
var server = http.createServer();
var host = '192.168.25.43';
var port = 4000;

// 클라이언트 연결 이벤트 처리
server.listen(port, host, () => {
    console.log('웹 서버가 시작되었습니다 : %d', port);
});

// 클라이언트 요청 이벤트 처리
server.on('request', (req, res) => {
    console.log('클라이언트 요청이 들어왔습니다');

    // var filename = 'house.png';
    // fs.readFile(filename, (err, data) => {
    //     res.writeHead(200, {"Content-Type": "image/png"});
    //     res.write(data);
    //     res.end();
    // })
});

// 서버 종료 이벤트 처리
server.on('close', () => {
    console.log('서버가 종료됩니다');
})