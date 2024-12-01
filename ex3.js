const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 0];
let zeroCount = 0;

numbers.forEach(num => zeroCount += (num === 0 ? 1 : 0));

console.log(`Number of zeros: ${zeroCount}`);
