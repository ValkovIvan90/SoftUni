function armies(arr) {

    let army = {};

    for (let key of arr) {
        if (key.includes('arrives')) {
            let index = key.indexOf('arrives');
            let leaderName = key.slice(0, index - 1);
            army[leaderName] = {};
        } else if (key.includes(':')) {
            let [name, solders] = key.split(': ');
            if (army.hasOwnProperty(name)) {
                let [legion, count] = solders.split(', ');
                army[name][legion] = Number(count);
            }
        } else if (key.includes('+')) {
            let [legion, count] = key.split(' + ');
            count = Number(count);
            let array = Object.values(army);
            for (const key of array) {
                if (key.hasOwnProperty(legion)) {
                    key[legion] += count;  // кей  се явава референтен , и мога да пропеням  чрез него !!
                }
            }

        } else if (key.includes('defeated')) {
            let index = key.indexOf('defeated');
            let name = key.slice(0, index - 1);
            delete army[name];
        }
    }
    let arrFromArmy = Object.entries(army);
    for (const row of arrFromArmy) {
        let sum = Object.values(row[1])
            .reduce((a, b) => a + b);
        row.push(sum);
        sum = 0;

    }
    arrFromArmy.sort(compare1)
    function compare1(a, b) {
        let first = a[2];
        let second = b[2];
        return second - first;
    }
    function compare2(a, b) {
        let first = a[1];
        let second = b[1];
        return second - first;
    }
    for (const key of arrFromArmy) {
        key[1] = Object.entries(key[1]);
        key[1] = key[1].sort(compare2);

    }
    for (let key of arrFromArmy) {
        console.log(`${key[0]}: ${key[2]}`);
        for (let line of key[1]) {
            console.log(`>>> ${line[0]} - ${line[1]}`);
        }
    }


}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives',
    'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000',
    'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])