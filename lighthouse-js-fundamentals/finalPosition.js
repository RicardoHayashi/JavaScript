
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


const finalPosition = function (moves) {
    let position = [];
    let x = 0;
    let y = 0;
    for (let direction of moves) {
        switch (direction) {
            case "north":
                x = ++x;
                break;
            case "south":
                x = --x;
                break;
            case "east":
                y = ++y;
                break;
            case "west":
                y = --y;
                break;
        }
    }
    position.push(y);
    position.push(x);
    console.log(position);
    //return position;
}

finalPosition(moves);