const finder = require('lodash');

const numbers = [19, 21, 23, 27, 12, 7, 1, 6];

const maxNumber = finder.max(numbers);
const minNumber = finder.min(numbers);


console.log(`Maximum number: ${maxNumber}`);
console.log(`Minimum number: ${minNumber}`);
