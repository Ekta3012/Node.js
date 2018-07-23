var http=require('http');
const fileRef = require('./fileSystem');

http.createServer(function(request,response){
    response.writeHead(200);
    response.write(fileRef.readContent());
    response.end();
}).listen(3001);
console.log("server create successfully");