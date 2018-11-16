
const inquirer = require('inquirer');
const shell = require('shelljs');
const path = require('path');
const inquirerOption = require('./inquirer-config');
const root = require('./path-config');

const initAction = ()=>{
    inquirer.prompt(inquirerOption.init).then(as=>{   
        let pack_path; 
        //创建项目目录结构
        if(as.item_name){
            let item_name = as.item_name;
            shell.mkdir('-p', path.resolve(root.rootPath, item_name));
            pack_path = path.resolve(root.rootPath, item_name);
            shell.cp(root.rootPathTem + '/README.md', pack_path);
            shell.exec(`
              cd ${pack_path}
              touch index.js
              npm init -y
            `);
        }  
        //下载node依赖包
        if(as.pack_name){
            let pack_name = as.pack_name.replace(/,/g, ' ');
            let downPackString = `npm i ${pack_name}  --save`;
            shell.exec(`
              cd ${pack_path}
              ${downPackString}
            `)
        }  
       
    })
}

const addAction = ()=>{
    inquirer.prompt(inquirerOption.add).then(as=>{
       let rootPath = path.resolve(root.rootPath, 'README.md');
       if(as.pack_name && as.item_name && as.symbol_name){
           let [pack_name, symbol_name, item_name] = [as.pack_name.split(','), as.symbol_name+as.symbol_name+as.symbol_name, as.item_name];
           for(let i=0;i<pack_name.length;i++){
                shell.exec(`
                echo '\n>'${symbol_name}'【'${item_name}'】'${pack_name[i]} >> ${rootPath}
                echo '\n>'${symbol_name}'[文档地址:https://www.npmjs.com/package/'${pack_name[i]}'](https://www.npmjs.com/package/'${pack_name[i]}')' >> ${rootPath}
                echo '\n>' >> ${rootPath}
                echo '\n---------' >> ${rootPath}
              `)
           }
       }else{
           console.error('输入的信息不完善，请重新输入...');
           addAction();
       }
    })
}

const pubAction = ()=>{
    inquirer.prompt(inquirerOption.pub).then(as=>{
       if(as.item_name){
           let copyFrom = path.resolve(root.rootPath, as.item_name, 'README.md');
           let copyTo = path.resolve(root.rootPath, 'PUBLISH.md');
           shell.exec(`
              echo '【每日一包'${as.item_name}'】\n' > ${copyTo} 
              echo '[github地址：https://github.com/ABCDdouyaer/a_pack_per_day_NO.1]\n' >> ${copyTo}
              cat ${copyFrom} >> ${copyTo}           
           `)
       }else{
           console.error('请输入醒目名称');
           pubAction()
       }
    })
}

const commitAction = ()=>{
    inquirer.prompt(inquirerOption.commit).then(as=>{
        if(as.commit_note){
           shell.exec(`
              cd ${root.rootPath}
              git add .
              git commit -m  ${as.commit_note}
              git push origin master
           `)
        }else{
            commitAction()
        }
    })
}
module.exports = {
    initAction,
    addAction,
    pubAction,
    commitAction,
}