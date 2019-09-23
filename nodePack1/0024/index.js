/**
 *Created by Jiraiya on 2018-12-2 15:18:19
 */

const req = require('inquirer');
const Rx = require('rxjs');


// req.prompt([{
//     type: "string",
//     message:'请输入您的名字',
//     name: 'name'
// }]).then(as=>{
//     console.log('您的名字是：'+as.name)
// }).catch(err=>{console.log(err)})

/**
 ? 请输入您的名字 小明
您的名字是：小明
 */



//  req.prompt([{
//      type:'input',
//      message:'请输入你的名字？',
//      name:"name",
//  },
//     {
//      type:'input',
//      message: function(e){
//          return `${e.name},请输入您的年龄？`
//      },
//      name: 'age'
//  }]).then(as=>{
//      console.log(as)
//  })

 const a = [{
    type:'input',
    message:'请输入你的名字？',
    name:"name",
    filter: (v)=> v+1
},
   {
    type:'input',
    message: function(e){
        return `${e.name},请输入您的年龄？`
    },
    name: 'age'
}];

req.prompt(a).then(res=>{
    console.log(res);
})
 /**
? 请输入你的名字？ 小明
? 小明,请输入您的年龄？ 12
{ name: '小明', age: '12' }
  */


// req.prompt([{
//     type: "list",
//     message:'请选择性别',
//     name: 'name',
//     choices: ['男', '女']
// }]).then(as=>{
//     console.log(as)
// }).catch(err=>{console.log(err)})

/**
? 请选择性别 女
{ name: '女' }
 */



// req.prompt([{
//     type: "input",
//     message:'请输入您的电话号码？',
//     name: 'mobile',
//     validate:function(e){
//         if(e.match(/^[1][2,3,5,6,7,8][0-9]{9}$/)){return true}
//         console.log('\n您输入的电话号码格式不对，请重新输入')
//         return false;
//     }
// }]).then(as=>{
//     console.log(as)
// }).catch(err=>{console.log(err)})

/**
? 请输入您的电话号码？ 110
您输入的电话号码格式不对，请重新输入
? 请输入您的电话号码？ 16619928930
{ mobile: '16619928930' }
 */



// req.prompt([{
//     type: "checkbox",
//     message:'请选择性别？',
//     name: 'sex',
//     choices:['男', '女'],
//     filter:function(e){
//         let sex = '';
//         e === '女' ? sex = 'woman' : sex = 'man';
//         return sex;
//     }
// }]).then(as=>{
//     console.log(as)
// }).catch(err=>{console.log(err)})

/**
 ❯◯ 男
  ◯ 女
  { sex: 'man' }
 */

//  req.prompt([{
//     type: "list",
//     message:'请问你结婚了吗？',
//     name: 'isMarry',
//     choices:['结婚', '未结婚'],
// },{
//     type: "input",
//     message:'请问你孩子多大了？',
//     name: 'age',
//     when:function(e){
//      return e.isMarry === '结婚'
//     }
// }]).then(as=>{
//     console.log(as)
// }).catch(err=>{console.log(err)})
/**
? 请问你结婚了吗？ 未结婚
{ isMarry: '未结婚' } 
 */




// req.prompt([{
//     type: "string",
//     message:'请输入您的名字',
//     name: 'name',
//     prefix:'您好'
// }]).then(as=>{
//     console.log('您的名字是：'+as.name)
// }).catch(err=>{console.log(err)})
/**
 您好 请输入您的名字 ww
 您的名字是：ww
 */


// var ui = new req.ui.BottomBar();

// // During processing, update the bottom bar content to display a loader
// // or output a progress bar, etc
// ui.updateBottomBar('new bottom bar content');

// req.prompt([{
//     type: "string",
//     message:'请输入您的名字',
//     name: 'name',
//     prefix:'您好'
// }]).then(as=>{
//     console.log('您的名字是：'+as.name)
// }).catch(err=>{console.log(err)})

// var prompts = new Rx.Subject();
// req.prompt(prompts);

// prompts.next({
//     type: "string",
//     message:'请输入您的名字',
//     name: 'name',
// });
// prompts.next({
//     type: "string",
//     message:'请输入您的性别',
//     name: 'sex',
// });

// prompts.complete();
