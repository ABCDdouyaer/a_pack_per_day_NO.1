### babel-core 

> 用于js代码转换,将es6,7代码转换为浏览器支持的语法，也可以转换为mapSouce和AST语法,当然这个过程要借助不同的插件

#### babel.transform(code: string, options?: Object) 对传入的code进行转换，返回{code,map,ast}

#### babel.transformFile(filename: string, options?: Object, callback: Function)异步转译文件中的内容

#### babel.transformFileSync(filename: string, options?: Object)同步转译文件中的内容

#### babel.transformFromAst(ast: Object, code?: string, options?: Object)给定一个AST，将它进行转换






