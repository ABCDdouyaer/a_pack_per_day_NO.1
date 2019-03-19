/**
 *Created by Jiraiya on 2018-12-27 16:05:24
 */

const assert = require('assert');


// let a = null;
// assert(a, 'a的值必须为true');


// assert.deepEqual({a: 1}, {a: '1'}, '判断两个值是否严格相等');//ok



// const obj1 = {a: { b: 1}};
// const obj2 = {a: { b: 2}};
// const obj3 = {a: { b: 1}};
// const obj4 = Object.create(obj1);

// assert.deepEqual(obj1, obj1);
// // OK

// assert.deepEqual(obj1, obj2);
// // AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

// assert.deepEqual(obj1, obj3);
// // OK

// assert.deepEqual(obj1, obj4);
// // AssertionError: { a: { b: 1 } } deepEqual {}





// assert.deepStrictEqual({a: 1}, {a: '1'}, '判断两个值是否严格相等');
//AssertionError [ERR_ASSERTION]: 判断两个值是否严格相等



const obj1 = {a: { b: 1}};
const obj2 = {a: { b: 2}};
const obj3 = {a: { b: 1}};
const obj4 = Object.create(obj1);

assert.deepStrictEqual(obj1, obj1);
// OK

assert.deepStrictEqual(obj1, obj2);
/**
AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
+ expected - actual

  {
    a: {
-     b: 1
+     b: 2
    }
  }
 */

assert.deepStrictEqual(obj1, obj3);
// OK

assert.deepStrictEqual(obj1, obj4);
/**
AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
+ expected - actual

- {
-   a: {
-     b: 1
-   }
- }
+ {}
 */