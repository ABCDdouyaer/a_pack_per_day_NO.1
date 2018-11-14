#### browserify

>browserify是一个编译工具,通过它可以在浏览器环境下像nodejs一样使用遵循commonjs规范的模块化编程.你可以使用browserify来组织代码,也可以使用第三方模块,不需要会nodejs,只需要用到node来编译,用到npm来安装包.browserify模块化的用法和node是一样的,所以npm上那些原本仅仅用于node环境的包,在浏览器环境里也一样能用.现在npm上有越来越多的包,在设计的时候就是想好既能在node环境下用,也能在浏览器环境下用的.甚至还有很多包就是给浏览器环境使用的. npm是为所有的javascript服务的,无论前端后端.

```用法```：node终端输入browserify index.js>bundle.js 对index.js进行打包

##### 1.为了让更多本来为node而开发的npm模块也能用在浏览器里,browserify提供了许多专门给浏览器使用的node内核的库.

<table border="1" style='text-align:center'>
  <tr style='text-align:center'>
    <th style='text-align:center;background:#b2f9b2' colspan=9>各种好用node库</th>
  </tr>
  <tr style='background:#f9b2f5'>
    <td>buffer</td>
    <td>console</td>
    <td>constants</td>
    <td>crypto</td>
    <td>domain</td>
    <td>events</td>
    <td>http</td>
  </tr>
  <tr style='background:#b2d6f9'>
    <td>https</td>
    <td>os</td>
    <td>path</td>
    <td>punycode</td>
    <td>querystring</td>
    <td>stream</td>
    <td>string_decoder</td>
  </tr>
   <tr style='background:#f9b2f5'>
    <td>timers</td>
    <td>tty</td>
    <td>url</td>
    <td>util</td>
    <td>vm</td>
    <td>zlib</td>
    <td></td>
  </tr>
</table>

##### 2.编译终端命令

```
Usage: browserify [entry files] {OPTIONS}

Standard Options:

    --outfile, -o  将编译后的文件写入到指定的文件中 eg: browserify index.js -o 1.txt

    --require, -r  A module name or file to bundle.require()
                   Optionally use a colon separator to set the target.

      --entry, -e  An entry point of your app

     --ignore, -i  Replace a file with an empty stub. Files can be globs.

    --exclude, -u  Omit a file from the output bundle. Files can be globs.

   --external, -x  Reference a file from another bundle. Files can be globs.

  --transform, -t  Use a transform module on top-level files.

    --command, -c  Use a transform command on top-level files.

  --standalone -s  Generate a UMD bundle for the supplied export name.
                   This bundle works with other module systems and sets the name
                   given as a window global if no module system is found.

       --debug -d  Enable source maps that allow you to debug your files
                   separately.

       --help, -h  Show this message

For advanced options, type `browserify --help advanced`.

Specify a parameter.
```
