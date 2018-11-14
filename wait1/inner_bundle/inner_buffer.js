module.exports = function(){
    var str='我是浏览器端buffer模块';
    var buf=Buffer.from(str,'utf-8');
    $('.inner_bundle>li').eq(0).text(buf.toString('utf-8'));
}