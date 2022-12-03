// Day 1: Calorie Counting
// https://adventofcode.com/2022/day/1

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const solutionPart1 = input => {
    const lines = input.split('\n');
    lines.push('');

    let maxSum = 0;
    let tmpSum = 0;
    lines.forEach(str => {
        if (!str) {
            if (tmpSum > maxSum) maxSum = tmpSum;
            tmpSum = 0;
        } else {
            tmpSum += +str;
        }
    });

    return maxSum;
};

const solutionPart2 = input => {
    const lines = input.split('\n');
    lines.push('');

    const totals = [];
    let tmpSum = 0;

    lines.forEach(str => {
        if (!str) {
            totals.push(tmpSum);
            tmpSum = 0;
        } else {
            tmpSum += +str;
        }
    });

    totals.sort((a, b) => b - a);
    return totals[0] + totals[1] + totals[2];
};

console.log(`Solution part 1: ${solutionPart1(input)}`);
console.log(`Solution part 2: ${solutionPart2(input)}`);