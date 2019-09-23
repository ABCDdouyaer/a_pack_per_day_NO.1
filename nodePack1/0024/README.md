### inquirer

> 好用的交互命令行工具

#### 方法

##### 1.inquirer.prompt(questions) -> promise  启动提示界面并返回promise

```
const req = require('inquirer');
req.prompt([{
    type: "string",
    message:'请输入您的名字',
    name: 'name'
}]).then(as=>{
    console.log('您的名字是：'+as.name)
}).catch(err=>{console.log(err)})

/**
 ? 请输入您的名字 小明
您的名字是：小明
 */
```

##### 2.inquirer.registerPrompt(name, prompt)  在name下面注册提示插件

##### 3.inquirer.createPromptModule() -> prompt function

#### 提问的问题对象属性

```type:```提示的类型(String)，默认为input，也可以设置为input, confirm, list, rawlist, expand, checkbox, password, editor;

```name:```接受答案的key（String），当问题被回答，答案会以对象形式返回;

```message:```用于设置提问的问题（String|Function）,如果设置为function，该function的第一个参数为近期回答的答案构成的对象;

```
req.prompt([{
     type:'input',
     message:'请输入你的名字？',
     name:"name",
 },
    {
     type:'input',
     message: function(e){
         return `${e.name},请输入您的年龄？`
     },
     name: 'age'
 }]).then(as=>{
     console.log(as)
 })

 /**
? 请输入你的名字？ 小明
? 小明,请输入您的年龄？ 12
{ name: '小明', age: '12' }
  */
```

```default:```如果用户没有回答，默认值存在则为该问题赋值默认答案(String|Number|Boolean|Array|Function)，如果设置为function，该function的第一个参数为近期回答的答案构成的对象;

```choices:```用于设置选择的列表（Array|Function）,如果设置为function，该function的第一个参数为近期回答的答案构成的对象;

```
req.prompt([{
    type: "list",
    message:'请选择性别',
    name: 'name',
    choices: ['男', '女']
}]).then(as=>{
    console.log(as)
}).catch(err=>{console.log(err)})

/**
? 请选择性别 女
{ name: '女' }
 */
```

```validate:```用来校验输入的答案是否符合要求（Function）,该function的第一个参数为近期回答的答案,通过返回boolean来判断是否校验通过，如果未通过则重新进入输入界面;

```
req.prompt([{
    type: "input",
    message:'请输入您的电话号码？',
    name: 'mobile',
    validate:function(e){
        if(e.match(/^[1][2,3,5,6,7,8][0-9]{9}$/)){return true}
        console.log('\n您输入的电话号码格式不对，请重新输入')
        return false;
    }
}]).then(as=>{
    console.log(as)
}).catch(err=>{console.log(err)})

/**
? 请输入您的电话号码？ 110
您输入的电话号码格式不对，请重新输入
? 请输入您的电话号码？ 16619928930
{ mobile: '16619928930' }
 */
```

```filter:```对输入的答案进行处理后返回新的答案（Function）,该function的第一个参数为近期回答的答案

```
req.prompt([{
    type: "checkbox",
    message:'请选择性别？',
    name: 'sex',
    choices:['男', '女'],
    filter:function(e){
        let sex = '';
        e === '女' ? sex = 'woman' : sex = 'man';
        return sex;
    }
}]).then(as=>{
    console.log(as)
}).catch(err=>{console.log(err)})

/**
 ❯◯ 男
  ◯ 女
  { sex: 'man' }
 */
```

```transformer:```对用户的问题进行转换（！！！！我没看懂这个是干嘛的，有看懂的求指教）（Function）

```when:```用来设定这个问题是否有必要被提问（Function），返回boolean,返回false表示忽略这个问题，该function的第一个参数为近期回答的答案

```
 req.prompt([{
    type: "list",
    message:'请问你结婚了吗？',
    name: 'isMarry',
    choices:['结婚', '未结婚'],
},{
    type: "input",
    message:'请问你孩子多大了？',
    name: 'age',
    when:function(e){
     return e.isMarry === '结婚'
    }
}]).then(as=>{
    console.log(as)
}).catch(err=>{console.log(err)})
/**
? 请问你结婚了吗？ 未结婚
{ isMarry: '未结婚' } 
 */
```
```pageSize:```设置选择列表每页显示的可选项数目（Number）

```prefix:```给问题前面添加内容（String）

```
req.prompt([{
    type: "string",
    message:'请输入您的名字',
    name: 'name',
    prefix:'您好'
}]).then(as=>{
    console.log('您的名字是：'+as.name)
}).catch(err=>{console.log(err)})
/**
 您好 请输入您的名字 ww
 您的名字是：ww
 */
```

```suffix:```给问题后面添加内容（String）

#### 设置新的UI显示

```
var ui = new req.ui.BottomBar();

// During processing, update the bottom bar content to display a loader
// or output a progress bar, etc
ui.updateBottomBar('new bottom bar content');

req.prompt([{
    type: "string",
    message:'请输入您的名字',
    name: 'name',
    prefix:'您好'
}]).then(as=>{
    console.log('您的名字是：'+as.name)
}).catch(err=>{console.log(err)})
```

#### 采用迭代器模式

```
const req = require('inquirer');
const Rx = require('rxjs');
var prompts = new Rx.Subject();
req.prompt(prompts);

prompts.next({
    type: "string",
    message:'请输入您的名字',
    name: 'name',
});
prompts.next({
    type: "string",
    message:'请输入您的性别',
    name: 'sex',
});

prompts.complete();
```