const instructorWithLongestName = function (instructors) {
    // Put your solution here
    let instructorresult = {};
    let instructorname = "";
    let instructorcourse = "";
    let numberofcaracter = 0;

    for (let x of instructors) {
        if (x.name.length >= numberofcaracter) {
            instructorname = x.name;
            instructorcourse = x.course;
            numberofcaracter = x.name.length;
        }
    }
    instructorresult.name = instructorname;
    instructorresult.course = instructorcourse;
    return instructorresult;
};

console.log(instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
]));

/*
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
 */