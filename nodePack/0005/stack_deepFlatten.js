'use strict';
module.exports = function (arr) {
  var res = [], stack = [].slice.call(arr);
  while(stack.length > 0){
      var p = stack.pop();
      Array.isArray(p) ? stack = stack.concat(p) : res.push(p);
  }
  return res.reverse();
};

