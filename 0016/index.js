/**
 *Created by Jiraiya on 2018-11-19 11:38:03
 */

const striptags = require('striptags');

var html =
    '<a href="https://example.com">' +
        'lorem ipsum <strong>dolor</strong> <em>sit</em> amet' +
    '</a>';
 
var a = striptags(html);// 'lorem ipsum dolor sit amet'
var b = striptags(html, '<strong>');//'lorem ipsum <strong>dolor</strong> sit amet'
var c = striptags(html, ['a']);//<a href="https://example.com">lorem ipsum dolor sit amet</a>
var d = striptags(html, [], '\n');
/** 
 * lorem ipsum
 * dolor
 * sit
 * amet
 */
var e = striptags(html, ['em']);// lorem ipsum dolor <em>sit</em> amet

console.log(a, '\n', b, '\n', c, '\n', d, '\n', e);


let stream_function = striptags.init_streaming_mode(['strong'], '$$');
console.log(stream_function(html));//$$lorem ipsum <strong>dolor</strong> $$sit$$ amet$$
