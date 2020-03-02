const http = require("http");

const server = http.createServer(); // 여기에 바로 콜백으로 전달해 줄 수도 있음(서버가 열렸을 때 전송할 콜백 함수)

const port = 3000; // 포트 번호

server.listen(port, function() { // 웹 서버가 실행되면 시작될 콜백 함수를 전달
    console.log('웹 서버가 시작되었습니다!');
});

// 클라이언트 connection 이벤트
server.on('connection', (socket) => {
    const addr = socket.address();
    console.log('클라이언트가 접속하였습니다. :%s, %d', addr.address, addr.port);
    console.log(`클라이언트가 접속하였습니다. :${addr.address}, ${addr.port}`);
})

// 클라이언트 request 이벤트
server.on('request', (req, res) => {
    console.log('클라이언트 요청이 들어왔습니다.');

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE HTML>");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>nodejs로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    console.dir(req);
});

// 서버 종료 이벤트
server.on('close', () => {
    console.log('서버가 종료됩니다');
});