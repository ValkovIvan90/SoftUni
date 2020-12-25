function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());


    for (const key of arr) {
        let [command, passagers] = key.split(' ');
        passagers = Number(passagers);
        if (command === 'Add') {
            add(passagers);
        } else if (isNaN(passagers)) {
            passagers = Number(command)
            addPassager(passagers);
        }


    }


    function add(passagers) {
        wagons.push(passagers);
    }
    function addPassager(passagers) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + passagers <=maxCapacity) {
                wagons[i] += passagers;
                break;
            }

        }
    }

    console.log(wagons.join(' '));


}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])