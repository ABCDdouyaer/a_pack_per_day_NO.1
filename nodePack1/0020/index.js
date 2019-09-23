/**
 *Created by Jiraiya on 2018-11-19 18:47:05
 */

const {throttle, debounce} = require('throttle-debounce');


let [div1, div2, div3, div4] = [
    document.getElementsByClassName('div1')[0],
    document.getElementsByClassName('div2')[0],
    document.getElementsByClassName('div3')[0],
    document.getElementsByClassName('div4')[0],
];
let [v1, v2, v3, v4] = [0, 0, 0, 0];

let a = () => {
    v1++;
    div1.innerHTML = v1;
}

let aa = throttle(1000, false, a);



let b = () => {
    v2++;
    div2.innerHTML = v2;
}

let bb = throttle(1000, true, b);


let c = () => {
    v3++;
    div3.innerHTML = v3;
}

let cc = debounce(1000, false, c);


let d = () => {
    v4++;
    div4.innerHTML = v4;
}

let dd = debounce(1000, true, d);

div1.onmousemove = aa;
div2.onmousemove = bb;
div3.onmousemove = cc;
div4.onmousemove = dd;