const isOdd = function (num) {
    return (num >= 0 ?  ( num % 2 === 1  ?  "Yes" : "No" ) : "Invalid Number!")
}

let x = -1;

console.log(x + " is odd? " + isOdd(x));