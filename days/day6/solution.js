// Day 6: Tuning Trouble
// https://adventofcode.com/2022/day/6

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const solutionPart1 = input => {
    for (let i = 3; i < input.length; i++) {
        const set = new Set();
        set
          .add(input[i])
          .add(input[i - 1])
          .add(input[i - 2])
          .add(input[i - 3]);
        if (set.size === 4) {
            return i + 1;
        }
    }
};

const solutionPart2 = input => {

    const checkCharsUnique = (input, lastPos, length) => {
        const set = new Set();
        for (let i = 0; i < length; i++) {
            set.add(input[lastPos - i]);
            if (set.size === i) return false;
        }
        return true;
    }

    for (let i = 3; i < input.length; i++) {
        if (checkCharsUnique(input, i, 14)) {
            return i + 1;
        }
    }
};

console.log(`Solution part 1: ${solutionPart1(input)}`);
console.log(`Solution part 2: ${solutionPart2(input)}`);
