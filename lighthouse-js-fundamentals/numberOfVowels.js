const numberOfVowels = function(data) {
  // Put your solution here
    let totalofvowel = 0;
    for (let x of data) {
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u')
            totalofvowel++; 
    }
    return totalofvowel;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
/*
Expected Output
3
5
5
*/