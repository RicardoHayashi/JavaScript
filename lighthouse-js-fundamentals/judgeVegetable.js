const vegetables = [
    {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    }
]

const metric = 'plumpness'

const judgeVegetable = function (vegetables, metric) {
    // Your code in here ...

    let name = "";
    let itemCompare = 0;
    for (let veg of vegetables) {
        
        if (veg[metric] >= itemCompare) {
            itemCompare = veg[metric];
            name = veg.submitter;
        }
    }
    return name;
}

console.log(judgeVegetable(vegetables, metric))