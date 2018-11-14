const http = require('http');
module.exports = function(){
    http.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=1&json=1&p=3&sid=1457_21110_27401&req=2&bs=node&csor=1&pwd=node&cb=jQuery11020842454649974304_1542100293817&_=1542100293820', (res) => {
        console.log(res)
    })
}