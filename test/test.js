a={};

var div=document.getElementById('mainfra').contentWindow.document.querySelectorAll('#weekly_bg div');
var b=[];
for(var i=0;i<div.length;i++){
    var url=div[i].getAttribute('style').split('(')[1].split(')')[0]
    b.push(url)
}

var img=document.getElementById('mainfra').contentWindow.document.querySelectorAll('.g_md_suit');
var c=[];
for(var j=0;j<img.length;j++){
    c.push(img[j].getElementsByTagName('img')[0].getAttribute('src'))
}
a.backGroundImage=b;
a.picArr=c;

console.log(JSON.stringify(a))