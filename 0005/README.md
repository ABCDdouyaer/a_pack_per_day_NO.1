#### arr-flatten
> 将多维数组展开成一维数组

[文档地址:https://www.npmjs.com/package/arr-flatten](https://www.npmjs.com/package/arr-flatten)

```用法```：arr-flatten(Array)

##### 该包采用的递归方式进行降维，也可以采用栈方式先进先出进行降维【见文件：stack_deepFlatten.js】

##### 当然ES6为我们提供了flat()和flatMap()方法更加简单化

```flat用法```：array.flat(默认1|number|infinity)

```flat返回```：array

```flatMap用法```：array.flatMap((value, index, arr)=>{})

```flatMap返回```：array

```flatMap等同于```：对数组执行map函数对返回的数组执行1层flat展开
