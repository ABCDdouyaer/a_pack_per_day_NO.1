const groupArray = require('group-array');
const eg= require('./config');

// console.log(groupArray(eg.eg1, 'tag'))
/**
 * 打印结果
 {
  one: [
    {tag: 'one', content: 'A'},
    {tag: 'one', content: 'B'}
  ],
  two: [
    {tag: 'two', content: 'C'},
    {tag: 'two', content: 'D'}
  ],
  three: [
    {tag: 'three', content: 'E'},
    {tag: 'three', content: 'F'}
  ]
}
 */


 console.log(groupArray(eg.eg2, 'data.year', 'data.tag', 'data.month', 'data.day'))

 /**
  { '2016': 
   { one: 
      { jan: 
         { '01': 
            [ { data: { year: '2016', tag: 'one', month: 'jan', day: '01' },
                content: '...' },
              { data: { year: '2016', tag: 'one', month: 'jan', day: '01' },
                content: '...' } ],
           '02': 
            [ { data: { year: '2016', tag: 'one', month: 'jan', day: '02' },
                content: '...' },
              { data: { year: '2016', tag: 'one', month: 'jan', day: '02' },
                content: '...' } ] },
        feb: 
         { '10': 
            [ { data: { year: '2016', tag: 'one', month: 'feb', day: '10' },
                content: '...' },
              { data: { year: '2016', tag: 'one', month: 'feb', day: '10' },
                content: '...' } ],
           '12': 
            [ { data: { year: '2016', tag: 'one', month: 'feb', day: '12' },
                content: '...' },
              { data: { year: '2016', tag: 'one', month: 'feb', day: '12' },
                content: '...' } ] } },
     two: 
      { jan: 
         { '14': 
            [ { data: { year: '2016', tag: 'two', month: 'jan', day: '14' },
                content: '...' },
              { data: { year: '2016', tag: 'two', month: 'jan', day: '14' },
                content: '...' } ],
           '16': 
            [ { data: { year: '2016', tag: 'two', month: 'jan', day: '16' },
                content: '...' },
              { data: { year: '2016', tag: 'two', month: 'jan', day: '16' },
                content: '...' } ] },
        feb: 
         { '18': 
            [ { data: { year: '2016', tag: 'two', month: 'feb', day: '18' },
                content: '...' } ] } } },
  '2017': 
   { two: 
      { feb: 
         { '10': 
            [ { data: { year: '2017', tag: 'two', month: 'feb', day: '10' },
                content: '...' },
              { data: { year: '2017', tag: 'two', month: 'feb', day: '10' },
                content: '...' } ],
           '18': 
            [ { data: { year: '2017', tag: 'two', month: 'feb', day: '18' },
                content: '...' } ] } },
     three: 
      { jan: 
         { '01': 
            [ { data: { year: '2017', tag: 'three', month: 'jan', day: '01' },
                content: '...' },
              { data: { year: '2017', tag: 'three', month: 'jan', day: '01' },
                content: '...' } ],
           '02': 
            [ { data: { year: '2017', tag: 'three', month: 'jan', day: '02' },
                content: '...' },
              { data: { year: '2017', tag: 'three', month: 'jan', day: '02' },
                content: '...' } ] },
        feb: 
         { '01': 
            [ { data: { year: '2017', tag: 'three', month: 'feb', day: '01' },
                content: '...' },
              { data: { year: '2017', tag: 'three', month: 'feb', day: '01' },
                content: '...' } ],
           '02': 
            [ { data: { year: '2017', tag: 'three', month: 'feb', day: '02' },
                content: '...' },
              { data: { year: '2017', tag: 'three', month: 'feb', day: '02' },
                content: '...' } ] } } } }
  */