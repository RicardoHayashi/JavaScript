


//"Suzie is 32 years old."


const ageCalculator = function (name, bornYear, currentYear) {
    let age = currentYear - bornYear;
    return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
