// /**
//  *Created by Jiraiya on 2019-4-4 18:02:07
//  */

// const _ = require('lodash')

// const a = {name:'zhangsan', sex: 'man', other: {
//     job: 'IT',
//     company: 'wwc'
// }}
// const b = {name:'lisi', sex: 'man', other: {
//     job: 'IT',
//     company: 'mcx',
//     hobby: 'computer'
// }}

// const c = _.mergeWith(a, b)

// // console.log(a, b, c)

// /**
//  * 
//  * { name: 'lisi',
//   sex: 'man',
//   other: { job: 'IT', company: 'mcx', hobby: 'computer' } } { name: 'lisi',
//   sex: 'man',
//   other: { job: 'IT', company: 'mcx', hobby: 'computer' } } { name: 'lisi',
//   sex: 'man',
//   other: { job: 'IT', company: 'mcx', hobby: 'computer' } }
//  */

// const  list = [
//     {isFree:true, m:100, time:200}, 
//     {isFree:false, m:100, time:200}, 
//     {isFree:true, m:100, time:100}, 
//     {isFree:false, m:200, time:200}, 
//     {isFree:true, m:100, time:400}, 
//     {isFree:true, m:100, time:200}, 
//     {isFree:true, m:300, time:200}, 
//     {isFree:false, m:100, time:300},
//     {isFree:true, m:100, time:200}];
// const m = [2,3,1,4,1,9]

// list.sort((a,b)=>{
//     if(a.m === b.m){
        
//         if(a.isFree === b.isFree){
//             return a.time - b.time
//         }else{
//             return (+b.isFree) - (+a.isFree)
//         }
//     }else{
//         return b.m - a.m
//     }
// })
// // list.sort((a, b)=>{
// //     if(a.isFree === b.isFree && a.m === b.m){
// //         return  a.time - b.time
// //     }else{
// //         return 0
// //     }
// // })

// console.log(list)


// const d = [{"freeMonths":4,"subPointId":3830904,"financePlanName":"优选20190419 19:41:48期","asset":"50,000.00","interestRate":"11.0","finalDueDate":1561462908000,"leftMonths":3,"isFree":1,"rewardAmount":100},{"freeMonths":6,"subPointId":3830905,"financePlanName":"优选20190419 19:41:59期","asset":"20,000.00","interestRate":"10.0","finalDueDate":1566733319000,"leftMonths":5,"isFree":1,"rewardAmount":20},{"freeMonths":6,"subPointId":3830963,"financePlanName":"优选20190423 16:26:14期","asset":"20,000.00","interestRate":"11.0","finalDueDate":1564475174000,"leftMonths":4,"isFree":1,"rewardAmount":20},{"freeMonths":6,"subPointId":3830964,"financePlanName":"优选20190423 16:29:40期","asset":"20,000.00","interestRate":"10.0","finalDueDate":1601713780000,"leftMonths":18,"isFree":0,"rewardAmount":80},{"freeMonths":6,"subPointId":3830965,"financePlanName":"优选20190423 16:28:15期","asset":"20,000.00","interestRate":"12.0","finalDueDate":1601886495000,"leftMonths":18,"isFree":0,"rewardAmount":80},{"freeMonths":6,"subPointId":3830968,"financePlanName":"优选20190423 16:33:57期","asset":"20,000.00","interestRate":"13.0","finalDueDate":1567326837000,"leftMonths":5,"isFree":1,"rewardAmount":20}]

// d.sort((a,b)=>{
//     if(a.rewardAmount !== b.rewardAmount){
//         return b.rewardAmount - a.rewardAmount
        
//     }else if(a.isFree !== b.isFree){
//         return !!a.isFree ? -1 : 1;
//     }else{
//         return b.finalDueDate - a.finalDueDate
//     }
// })
// // list.sort((a, b)=>{
// //     if(a.isFree === b.isFree && a.m === b.m){
// //         return  a.time - b.time
// //     }else{
// //         return 0
// //     }
// // })

// console.log(d)


arr=[{"m":100,"t":1561462908000},{"m":20,"t":1566733319000},{"m":20,"t":1564475174000},{"m":80,"t":1601713780000},{"m":80,"t":1601886495000},{"m":20,"t":1567326837000},{"m":350,"t":1596099178000},{"m":80,"t":1569930064000}]

    // arr.sort((item1, item2)=>{
    // return SortByProps(item1, item2, { "m": "a", "is": "a", "t": "a" });
    // })
    
    arr.sort((a,b)=>{
    if(a.m === b.m){
    if(a.is === b.is){
    return (a.t - b.t) > 0 ? 1 : -1
    }else{
    return (a.is - b.is) > 0 ? -1 : 1
    }
    }else{
    return (a.m - b.m) > 0 ? -1 : 1
    }
    
    })
    console.log(arr)
    