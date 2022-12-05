// Day 5: Supply Stacks
// https://adventofcode.com/2022/day/5

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const solutionPart1 = input => {
    const [stacksInput, actionsInput] = input.split('\n\n');
    const stacksLines = stacksInput.split('\n');
    const actionsLines = actionsInput.split('\n');
    const digitsRegex = /\d+/gm;

    const stackNumsLine = stacksLines.pop();
    const stacks = {};
    stackNumsLine.split('   ').forEach(str => stacks[str.trim()] = []);

    for (let i = stacksLines.length - 1; i >= 0; i--) {
        const line = stacksLines[i];
        const max = (line.length - Math.floor(line.length / 3) + 1) / 3;
        for (let i = 0; i < max; i++) {
            const pos = i * 3 + i;

            const value = `${line[pos] + line[pos + 1] + line[pos + 2]}`.trim();
            if (!value) continue;

            stacks[i + 1].push(value);
        }
    }

    actionsLines.forEach(line => {
        const result = [...line.matchAll(digitsRegex)];
        const amountToMove = +result[0][0];
        const fromStack = +result[1][0];
        const toStack = +result[2][0];

        for (let i = 0; i < amountToMove; i++) {
            const value = stacks[fromStack].pop();
            stacks[toStack].push(value);
        }

    });

    return Object.values(stacks).map(arr => arr[arr.length - 1][1]).join('');
};

const solutionPart2 = input => {
    const [stacksInput, actionsInput] = input.split('\n\n');
    const stacksLines = stacksInput.split('\n');
    const actionsLines = actionsInput.split('\n');
    const digitsRegex = /\d+/gm;

    const stackNumsLine = stacksLines.pop();
    const stacks = {};
    stackNumsLine.split('   ').forEach(str => stacks[str.trim()] = []);

    for (let i = stacksLines.length - 1; i >= 0; i--) {
        const line = stacksLines[i];
        const max = (line.length - Math.floor(line.length / 3) + 1) / 3;
        for (let i = 0; i < max; i++) {
            const pos = i * 3 + i;

            const value = `${line[pos] + line[pos + 1] + line[pos + 2]}`.trim();
            if (!value) continue;

            stacks[i + 1].push(value);
        }
    }

    actionsLines.forEach(line => {
        const result = [...line.matchAll(digitsRegex)];
        const amountToMove = +result[0][0];
        const fromStack = +result[1][0];
        const toStack = +result[2][0];

        stacks[toStack] = stacks[toStack].concat(stacks[fromStack].splice(-amountToMove));
    });

    return Object.values(stacks).map(arr => arr[arr.length - 1][1]).join('');
};


console.log(`Solution part 1: ${solutionPart1(input)}`);
console.log(`Solution part 2: ${solutionPart2(input)}`);