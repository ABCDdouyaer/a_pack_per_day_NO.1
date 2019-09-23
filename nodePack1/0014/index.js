var toPascalCase = require('to-pascal-case');
var sentence = require('to-sentence-case'); 
var snake = require('to-snake-case');


toPascalCase('space case');  // "SpaceCase"
toPascalCase('snake_case');  // "SnakeCase"
toPascalCase('dot.case');    // "DotCase"
toPascalCase('weird[case');  // "WeirdCase"
 
sentence('the catcher in the rye'); 
// "The catcher in the rye"

snake('camelCase');  // "camel_case"
snake('space case'); // "snake_case"
snake('dot.case');   // "dot_case"
snake('weird[case'); // "weird_case"