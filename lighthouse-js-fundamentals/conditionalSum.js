const conditionalSum = function (values, condition) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let x of values) {
        if (x % 2 === 0)
            sumEven = sumEven + x;
        else
            sumOdd = sumOdd + x;
    }
    return (condition === "even" ? sumEven : sumOdd);
    
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
/*
Expected Output
6
9
144
0
*/