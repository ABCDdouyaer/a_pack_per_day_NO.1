module.exports = function(){
    global.inner_global = '我是浏览器端的global，等同于window,其实挂在在window上';
    $('.inner_bundle>li').eq(1).text(inner_global);
}