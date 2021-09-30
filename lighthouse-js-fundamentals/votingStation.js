const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
    let stationsValid = [];
    for (var itemStation of stations) {
        if ((itemStation[2] === "school" || itemStation[2] === "community centre") && itemStation[1] >= 20) {
            stationsValid.push(itemStation[0]);
            /* push substitute stationsValid[i] = itemStation[0] */
        }
    }
    console.log(stationsValid);
}

chooseStations(stations);