/*

loopyLighthouse(range, multiples, words) that you call with 3 parameters.

range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
The loopyLighthouse function should log to the console all the numbers from 15 to 90,
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".

*/

const loopyLighthouse = function (range, multiples, words) {
    let result = [];
    let start = range[0];
    let end = range[1];
    for (let i = start; i <= end; i++) {
        if (i % (multiples[0] *  multiples[1]) === 0)
            result.push(words[0] + words[1])
        else if (i % multiples[0] === 0)
            result.push(words[0])
        else if (i % multiples[1] === 0)
            result.push(words[1])
        else
            result.push(i);
    }
    console.log(result)
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

/*
function concat(arg1, arg2) {
    let result = [];
    for (let x of arg1)
        result.push(x);
    for (let y of arg2)
        result.push(y);
    return result.sort();
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([0, 3, 1], [9, 7, 2]));
console.log(concat([], [9, 7, 2]));
console.log(concat([5, 10], []));
*/