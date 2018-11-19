(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"throttle-debounce":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function throttle ( delay, noTrailing, callback, debounceMode ) {

	var timeoutID;

	var lastExec = 0;

	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			exec();
		}

		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			exec();

		} else if ( noTrailing !== true ) {

			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

}


function debounce ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

exports.throttle = throttle;
exports.debounce = debounce;

},{}]},{},[1]);
