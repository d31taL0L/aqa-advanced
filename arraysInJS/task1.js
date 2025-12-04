const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0
let negativeCount = 0;
let zeroCount = 0;

for (number of numbers) {
    if (number > 0) {
        positiveCount++;
    }

    if (number < 0) {
        negativeCount++;
    }

    if (number === 0) {
        zeroCount++;
    }
}

console.log(`Number of positive numbers: ${positiveCount}`);
console.log(`Number of negative numbers: ${negativeCount}`);
console.log(`Number of zero numbers: ${zeroCount}`);