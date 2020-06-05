const http = require('http');
const server = http.createServer();
server.on('connection', (code) => {
    console.log('웹브라우저에서 나에게 connect 요청을 해 왔습니다');
});
server.on('request', (request, response) => { 
    console.log('request 이벤트가 발생하였습니다.');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>'+ 'oh my god!' +'</h1>');
});
server.listen(65010, () => { console.log('Server 실행(65010) ...');
});