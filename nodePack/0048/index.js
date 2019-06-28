/**
 *Created by Jiraiya on 2019-4-1 18:30:57
 */

const proxy = require('http-proxy')
const http = require('http')


// 基本代理 127.0.0.1:8080 -> 127.0.0.1:3000
http.createServer((req, res) => {

    proxy.createProxyServer().web(req, res, {
        target: 'https://www.easy-mock.com/mock/5ca2c591a8c93522d8561dba/example/list',
        secure: false
    },function(e){
        console.log(e)//错误信息监听
    })

}).listen(8080)


// 代理

// proxy.createProxyServer({target: 'http://localhost:9000'}).listen(8000);

// http.createServer((req, res) => {
//     res.end('其实你访问的是9000端口')
// }).listen('9000')


// var http = require('http'),
//     httpProxy = require('http-proxy');
// //
// // Create your proxy server and set the target in the options.
// //
// httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000); // See (†)

// //
// // Create your target server
// //
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(9000);