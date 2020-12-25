
function solve(arr) {
    let n = Number(arr.shift());
    let plants = {};
    let commands = {
        Rate(plants, plant, currentRating) {
            currentRating = Number(currentRating);
            let name = plants[plant];
            name.rating.push(currentRating)

        },
        Update(plants, plant, newRarity) {
            let name = plants[plant];
            newRarity = Number(newRarity);
            name.rarity = newRarity;
        },
        Reset(plants, plant) {
            plants[plant].rating = [];
        }
    }

    for (let i = 0; i < n; i++) {
        let currentLine = arr.shift();
        let [plant, rarity] = currentLine.split('<->');
        rarity = Number(rarity);
        plants[plant] = {
            rarity,
            rating: [],
        };
    };
    let line;
    while ((line = arr.shift()) !== 'Exhibition') {

        let [command, ...args] = line.split(': ');
        let [plant, date] = args[0].split(' - ');
        if (plants.hasOwnProperty(plant)) {
            if (commands.hasOwnProperty(command)) {
                commands[command](plants, plant, date);
            }
            else {
                console.log('error');
            }
        } else {
            console.log('error');

        }

    }
    let sorted = Object.keys(plants).sort((a, b) => plants[b].rarity - plants[a].rarity ||
        average(plants[b].rating) - average(plants[a].rating));

    console.log('Plants for the exhibition:');

    for (const key of sorted) {
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${average(plants[key].rating).toFixed(2)}`);

    }
    function average(arr) {
        if (!arr.length) return 0;

        return arr.reduce((a, b) => a + b, 0) / arr.length;
    };
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);
console.log('----------');

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]);