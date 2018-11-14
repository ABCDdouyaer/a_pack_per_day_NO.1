const captcha = require('canvas-captcha');
const http = require('http');
const captchaOptions = {
    charPool: ('abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase() + '1234567890').split('') //char pool Array
    ,size: {
        width: 130
        ,height: 62
    } //image size
    ,textPos: {
        left: 15
        ,top: 46
    } //text drawing start position
    ,rotate: .01 //text ratate
    ,charLength: 5 //how many chars
    ,font: '26px Unifont' //font size
    ,strokeStyle: '#0088cc' //style
    ,bgColor: '#eeeeee' //bg color
    ,confusion: true //draw another group background text to mangle the text
    ,cFont: '30px Arial' //bg text style
    ,cStrokeStyle: '#adc' //bg text color
    ,cRotate: -.05 //bg text rotate
};

let captchaPromise = function(options){
    return new Promise((resolve, reject)=>{
        captcha(options, (err, data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

http.createServer(function(req, res){
    if(req.url = 'captcha'){
        captchaPromise(captchaOptions).then(data=>{
            // req.session.captcha = data.captchaStr;
            // console.log(data)
            res.end(data.captchaImg)
        },err=>{
            res.end(err)
        })
    }
}).listen(8080,()=>{console.log('server is running at 8080 ')})