const http = require("http");
const fs = require('fs');
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

    const filename = "nodejs.png";
    const infile = fs.createReadStream(filename, {flags: 'r'});
    let fileLength = 0;
    let curLength = 0;

    fs.stat(filename, (err, stats) => {
        fileLength = stats.size;
    })
    // 헤더 쓰기
    res.writeHead(200, {"Content-Type": "image/png"});

    infile.on('readable', () => {
        let chunk;
        while (null !== (chunk = infile.read())) {
            console.log('읽어 들인 데이터 크기 : %d 바이트', chunk.length);
            curLength += chunk.length;
            res.write(chunk, 'utf8', (err) => {
                console.log('파일 부분 쓰기 완료 : %d, 파일 크기 : %d', curLength, fileLength)
                if(curLength >= fileLength) {
                    //응답 전송
                    res.end();
                }
            })
        }
    })
});

// 서버 종료 이벤트
server.on('close', () => {
    console.log('서버가 종료됩니다');
});