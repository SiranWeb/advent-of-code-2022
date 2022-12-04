// Day 4: Camp Cleanup
// https://adventofcode.com/2022/day/4

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const solutionPart1 = input => {
    const lines = input.split('\n');
    let total = 0;

    lines.forEach(str => {
        const [left, right] = str.split(',');
        const [leftStartNum, leftEndNum] = left.split('-').map(str => +str);
        const [rightStartNum, rightEndNum] = right.split('-').map(str => +str);

        const isLeftInside = leftStartNum >= rightStartNum && leftEndNum <= rightEndNum;
        const isRightInside = leftStartNum <= rightStartNum && leftEndNum >= rightEndNum;

        if (isLeftInside || isRightInside) total++;
    })

    return total;
};

const solutionPart2 = input => {
    const lines = input.split('\n');
    let total = 0;

    lines.forEach(str => {
        const [left, right] = str.split(',');
        const [leftStartNum, leftEndNum] = left.split('-').map(str => +str);
        const [rightStartNum, rightEndNum] = right.split('-').map(str => +str);

        const isLeftOverlap = leftEndNum <= rightEndNum && leftEndNum >= rightStartNum;
        const isRightOverlap = rightEndNum <= leftEndNum && rightEndNum >= leftStartNum;

        if (isLeftOverlap || isRightOverlap) total++;
    })

    return total;
};

console.log(`Solution part 1: ${solutionPart1(input)}`);
console.log(`Solution part 2: ${solutionPart2(input)}`);