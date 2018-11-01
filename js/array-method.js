/* eslint no-console: off */

const numbers = [1, 6, 13, 5, 8, 9, 10];

// using loops and making up new array:
const smallNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 7) {
        smallNumbers.push(numbers[i]);
    }
}

console.log('classic hand rolled way', smallNumbers);

// using array.filter:
const filteredNumbers = numbers.filter(function(number) {
    return number < 7;
});

console.log('array method way', filteredNumbers);

const sortedNumbers = numbers.slice().sort(function(a, b) {
    // if(a === b) {
    //     return 0;
    // }
    // else if(a > b) {
    //     return 1;
    // }
    // else {
    //     return -1;
    // }

    return a - b;
});

console.log('sorted', sortedNumbers);