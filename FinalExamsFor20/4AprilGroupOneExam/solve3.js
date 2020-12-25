function solve(arr) {
    let towns = {};

    let line;

    while ((line = arr.shift()) !== 'Sail') {
        let [townName, popul, gold] = line.split('||');
        [popul, gold] = [Number(popul), Number(gold)];

        if (towns.hasOwnProperty(townName) === false) {
            towns[townName] = { popul: 0, gold: 0 };
        }
        towns[townName].popul += popul;
        towns[townName].gold += gold;
        // if (towns.hasOwnProperty(townName)) {
        //     towns[townName].popul += popul;
        //     towns[townName].gold += gold;
        // } else {
        //     towns[townName] = { popul, gold };
        // }
    }
    let currLine;

    let commnads = {
        Plunder(towns, town, args) {
            let city = towns[town];
            let [pop, gol] = args
            city.popul -= pop;
            city.gold -= gol;
            console.log(`${town} plundered! ${gol} gold stolen, ${pop} citizens killed.`);
            if (city.popul === 0 || city.gold === 0) {
                console.log(`${town} has been wiped off the map!`);

                delete towns[town];
            }
        },
        Prosper(towns, town, sum) {
            sum = Number(sum);
            let city = towns[town];
            if (sum > 0) {
                city.gold += sum;
                console.log(`${sum} gold added to the city treasury. ${town} now has ${city.gold} gold.`);

            } else {
                console.log('Gold added cannot be a negative number!');
            }

        }
    };

    while ((currLine = arr.shift()) !== 'End') {
        let [command, cityName, ...args] = currLine.split('=>');
        args = args.map(Number);
        let action = commnads[command]
        action(towns, cityName, args)
    }
    let sorted = Object.entries(towns).sort(compare);
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
    for (const key of sorted) {
        console.log(`${key[0]} -> Population: ${key[1].popul} citizens, Gold: ${key[1].gold} kg`);

    }
    function compare([nameA, townA], [nameB, townB]) {
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }
}
solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])

console.log('_________________________________________________');

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]
  )
