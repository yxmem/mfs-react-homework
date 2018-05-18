
var http = require("http");
var count = 0;

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据
    response.end(`${count++}`);
    //++count;
}).listen(8889);
