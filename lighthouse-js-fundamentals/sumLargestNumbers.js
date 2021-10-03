const sumLargestNumbers = function (data) {
    // Put your solution here
    const largestNumbersOrdered = data.sort(function (a, b) { return b - a });
    return largestNumbersOrdered[0] + largestNumbersOrdered[1];
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
//Expected Output
//11
//5
//126