const fs = require('fs'); const http = require('http');
// 서버생성/서버실행
http.createServer( (request, response) => {
    // HTML 파일을 읽습니다. 
    fs.readFile('HTMLPage.html', function (error, data) {
    if (error) {
    response.writeHead(500,'utf8',{ 'Content-Type': 'text/plain; charset=utf8' } ); 
    response.end('Server: HTML파일이 없습니다');
    } else {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' } );
    response.end(data); }
    });
}).listen(65010, () => {
    console.log('Server Running at http://127.0.0.1:65010'); 
});