// Day 2: Rock Paper Scissors
// https://adventofcode.com/2022/day/2

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');

const solutionPart1 = input => {
    const elements = {
        A: 'rock',
        X: 'rock',
        B: 'paper',
        Y: 'paper',
        C: 'scissors',
        Z: 'scissors',
    }
    const weaknesses = {
        rock: 'paper',
        paper: 'scissors',
        scissors: 'rock',
    }
    const points = {
        results: {
            win: 6,
            draw: 3,
            lose: 0,
        },
        elems: {
            rock: 1,
            paper: 2,
            scissors: 3,
        },
    }

    const lines = input.split('\n');
    let total = 0;

    lines.forEach(str => {
        if (!str) return;
        const [left, right] = str.split(' ');
        const [leftElem, rightElem] = [elements[left], elements[right]];
        if (leftElem === rightElem) {
            total += points.results.draw + points.elems[rightElem];
        } else if (weaknesses[leftElem] === rightElem) {
            total += points.results.win + points.elems[rightElem];
        } else {
            total += points.results.lose + points.elems[rightElem];
        }
    });

    return total;
};

const solutionPart2 = input => {
    const elements = {
        A: 'rock',
        B: 'paper',
        C: 'scissors',
    }
    const results = {
        X: 'lose',
        Y: 'draw',
        Z: 'win',
    }
    const weaknesses = {
        rock: 'paper',
        paper: 'scissors',
        scissors: 'rock',
    }
    const strengths = {
        paper: 'rock',
        scissors: 'paper',
        rock: 'scissors',
    }
    const points = {
        results: {
            win: 6,
            draw: 3,
            lose: 0,
        },
        elems: {
            rock: 1,
            paper: 2,
            scissors: 3,
        },
    }

    const lines = input.split('\n');
    let total = 0;

    lines.forEach(str => {
        if (!str) return;
        const [left, right] = str.split(' ');
        const [leftElem, result] = [elements[left], results[right]];
        if (result === 'win') {
            total += points.results.win + points.elems[weaknesses[leftElem]];
        } else if (result === 'draw') {
            total += points.results.draw + points.elems[leftElem];
        } else {
            total += points.results.lose + points.elems[strengths[leftElem]];
        }
    });

    return total;
};


console.log(`Solution part 1: ${solutionPart1(input)}`);
console.log(`Solution part 2: ${solutionPart2(input)}`);