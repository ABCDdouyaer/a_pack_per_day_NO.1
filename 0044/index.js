/**
 *Created by Jiraiya on 2019-3-27 13:57:30
 */

const notifier = require('node-notifier')

// String
// notifier.notify('Message');
 
// // Object
// notifier.notify({
//   title: 'My notification',
//   message: 'Hello, there!',
// });

s='$adad'
m=s.replace(/(\w+)/,function(a, $1,$2){
    console.log(a,$1,$2)
    return '$'+($1)+1
})
console.log(m)