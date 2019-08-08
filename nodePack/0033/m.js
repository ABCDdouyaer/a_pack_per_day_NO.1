async function f(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(1)
        },2000)
    })
}

async function p(){
    
}