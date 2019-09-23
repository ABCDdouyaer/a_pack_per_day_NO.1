const all = [];
function getTable(x){
    const result = {};
    const headingText = $$('.heading')[x].innerText;
    result[headingText] = {};
    const tableEle = $$('.type-table')[x];
    const trArr = tableEle.querySelectorAll('.single-detail');
    for(let i=0; i<trArr.length; i++){
        const thArr = trArr[i].getElementsByTagName('td');
        const id = thArr[0].innerText;
        const nameSy = thArr[1].getElementsByTagName('a')[0].getAttribute('href');
        const name = nameSy.split('/')[nameSy.split('/').length-1];
        const desc = thArr[2].innerText;
        all.push({
            name,
            id
        });
        result[headingText][name] = {
            id,
            name,
            desc,
        }
    }
    return result
}

const result = {
    nodePack: {},
};

function getAll(){
    const allHeading = $$('.heading');
    for(let i=0; i<allHeading.length; i++){
        Object.assign(result.nodePack, getTable(i))
    }
    result.other = all;
    return JSON.stringify(result);
}