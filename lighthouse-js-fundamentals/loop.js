

/*
for (var count = 100; count <= 200; count++) {
    switch (count) {
        case (count % 3) === 0: console.log("Loopy");
        case (count % 4) === 0: console.log("Lighthouse");
        default:
            console.log(count);
            break; 
    }
} 
*/

for (var count = 100; count <= 200; count++)
    console.log((count % 3) === 0 && (count % 4) === 0 ? "LoopyLighthouse" : ( count % 3 === 0 ? "Loopy" : (count % 4 === 0 ? "Lighthouse" : count ) ) ) ;


/*
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/