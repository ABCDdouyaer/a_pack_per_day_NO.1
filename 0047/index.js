/**
 *Created by Jiraiya on 2019-4-1 17:48:31
 */

const debug_1 = require('debug')('http1')
  , http = require('http')
  , name = 'My App';
 
// fake app
 
debug_1('booting %o', name);
 
http.createServer(function(req, res){
    debug_1(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(8080, function(){
    debug_1('Server is running at 127.0.0.1:8080')
});



const debug_2 = require('debug')('http2')
debug_2('我是2号debug')