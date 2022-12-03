// Day 3: Rucksack Reorganization
// https://adventofcode.com/2022/day/3

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const solutionPart1 = input => {
    const lines = input.split('\n');
    let total = 0;

    const isUpper = str => {
        return str.toUpperCase() === str;
    }

    const processItem = (letter, type, store) => {
        const oppositeType = type === 'left' ? 'right' : 'left';

        if (store[oppositeType][letter]) {
            total += isUpper(letter) ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
            return true;
        }

        store[type][letter] = true;
        return false;
    }

    lines.forEach(str => {
        const store = {
            left: {},
            right: {},
        };
        const length = str.length / 2;
        const left = str.substring(0, length);
        const right = str.substring(length);
        for (let i = 0; i < length; i++) {
            if (processItem(left[i], 'left', store)) break;
            if (processItem(right[i], 'right', store)) break;
        }
    });

    return total;
};

const solutionPart2 = input => {
    const lines = input.split('\n');
    let total = 0;

    const isUpper = str => {
        return str.toUpperCase() === str;
    }

    const processRucksack = (line, type, store) => {
        for (let i = 0; i < line.length; i++) {
            const letter = line[i];
            if (!store[letter]) store[letter] = {};
            store[letter][type] = true;

            if (store[letter].first && store[letter].second && store[letter].third) {
                total += isUpper(letter) ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
                return true;
            }
        }
    }

    const groupsAmount = lines.length / 3;
    for (let i = 0; i < groupsAmount; i++) {
        const store = {};
        const groupNum = i * 3;
        if (processRucksack(lines[groupNum], 'first', store)) continue;
        if (processRucksack(lines[groupNum + 1], 'second', store)) continue;
        processRucksack(lines[groupNum + 2], 'third', store);
    }

    return total;
};

console.log(`Solution part 1: ${solutionPart1(input)}`);
console.log(`Solution part 2: ${solutionPart2(input)}`);