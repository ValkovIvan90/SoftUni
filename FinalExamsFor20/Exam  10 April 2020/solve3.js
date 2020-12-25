function solve3(arr) {
    let carsCount = Number(arr.shift());
    let cars = {};
    let commands = {
        Drive(cars, car, distance, fuel) {
            [distance, fuel] = [Number(distance), Number(fuel)];
            let name = cars[car];
            if (name.dis - fuel < 0) {
                console.log('Not enough fuel to make that ride');
            } else {
                name.km += distance;
                name.dis -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            }
            if (name.km >= 100000) {
                console.log(`Time to sell the ${car}!`);

                delete cars[car];
            }
        },
        Refuel(cars, car, fuel) {
            fuel = Number(fuel);
            let name = cars[car];
            let sum = 0;
            if (name.dis + fuel > 75) {
                sum = 75 - name.dis;
                name.dis = 75;

            } else {
                sum = fuel;
                name.dis += fuel;
            }
            console.log(`${car} refueled with ${sum} liters`);
        },
        Revert(cars, car, kilometers) {
            kilometers = Number(kilometers);
            let name = cars[car];
            name.km -= kilometers;
            if (name.km < 10000) {
                name.km = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    };
    let count = 0;
    while (count !== carsCount) {
        let line = arr.shift();
        let [carName, currentKil, diselCount] = line.split('|');
        [currentKil, diselCount] = [Number(currentKil), Number(diselCount)];
        cars[carName] = {
            km: currentKil,
            dis: diselCount,
        }
        count++;
    }

    let text;

    while ((text = arr.shift()) !== 'Stop') {
        let [command, autos, ...args] = text.split(' : ');
        commands[command](cars, autos, ...args);
    }

    let sorted = Object.entries(cars).sort(sorting);

    function sorting([firtsA, secondA], [firtsB, secondB]) {
        return secondB.km - secondA.km || firtsA.localeCompare(firtsB);
    }
    for (const key of sorted) {
        console.log(`${key[0]} -> Mileage: ${key[1].km} kms, Fuel in the tank: ${key[1].dis} lt.`);

    }

};
solve3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

//   solve3([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ]
//   )