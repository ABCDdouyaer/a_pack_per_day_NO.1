module.exports = {
    init: [
        {
            type:"string",
            message:"请输入项目名称",
            name: 'item_name'
        },
        {
            type:"string",
            message:"请输入需要下载的依赖包以,分割",
            name: 'pack_name'
        }
    ],
    add: [
        {
            type: 'string',
            message: '请输入项目名称',
            name: "item_name"
        },
        {
            type: "string",
            message: "请输入包名以,分割",
            name: 'pack_name'
        },
        {
            type: "string",
            message: "请输入表情",
            name: 'symbol_name'
        }
    ],
    pub: [
        {
            type: "string",
            message:'请输入项目名称',
            name: 'item_name'
        }
    ],
    commit: [
        {
            type: "string",
            message:'请输入本次提交的备注',
            name: 'commit_note'
        }
    ]
}