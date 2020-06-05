const http=require('http'); 
const fs=require('fs');
http.createServer( (request, response) => 
    { 
        if (request.method == 'GET') 
        {
            if (request.url == '/a') 
            { 
                fs.readFile('a.html', (error, file) => {
                response.writeHead(200, 
                    { 'Content-type':'text/html; charset=utf8'}); 
                response.end(file);
            });
            } 
            else if (request.url == '/b') {
                fs.readFile('b.html', (error, file) => { response.writeHead(200, {
                'Content-type':'text/html' });
                response.end(file);
                }); 
            }
            else { 
                response.writeHead(404); response.end();
            }
        } /* GET method */
    }).listen(65010, () => {
        console.log('Server Running (65010) ...'); 
    });