
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("Write a while loop that prints out the contents of ingredients:");

let i = 0;
while(i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("Write a for loop that prints out the contents of ingredients:");

for (let x of ingredients)
    console.log(x);

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("WWrite any loop (while or for) that prints out the contents of ingredients backwards:");

for (let x of ingredients.reverse())
    console.log(x);

let y = ingredients.length - 1
while (y >= 0) {
    console.log(ingredients[y]);
    y--;
}
 