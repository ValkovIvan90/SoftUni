function solve(arr) {
    let capacit = Number(arr.shift());
    let action = {
        Add(list, userName, sent, recieved) {
            [sent, recieved] = [Number(sent), Number(recieved)];
            if (!list.hasOwnProperty(userName)) {
                list[userName] = { sent, recieved };
            }
        },
        Message(list, sender, recievN) {
            if (list.hasOwnProperty(sender) && list.hasOwnProperty(recievN)) {
                let first = list[sender];
                let second = list[recievN];
                first.sent += 1;
                second.recieved += 1;
                if (first.sent === 10) {
                    delete list[sender];
                    console.log(`${sender} reached the capacity!`);

                }
                if (second.recieved === 10) {
                    console.log(`${recievN} reached the capacity!`);
                    delete list[recievN];
                }
            }

        },
    };
    let list = {};

    let line;
    while ((line = arr.shift()) !== 'Statistics') {
        let [comm, ...args] = line.split('=');
        if (comm == 'Empty') {
            let name = args[0];
            if (name === 'All') {
                list = {};

            } else {
                if (list.hasOwnProperty(name)) {

                    delete list[name]
                }
            }
        } else {
            action[comm](list, ...args);
        }


    }
    let sorted = Object.entries(list).sort((a, b) => b[1].recieved - a[1].recieved || a[0].localeCompare(b[0]));

    console.log(`Users count: ${sorted.length}`);
    for (const key of sorted) {
        let name = key[0];
        console.log(`${name} - ${list[name].sent + list[name].recieved}`);

    }


}

// solve([
//     '10',
//     'Add=Mark=5=4',
//     'Add=Clark=3=5',
//     'Add=Berg=9=0',
//     'Add=Kevin=0=0',
//     'Message=Berg=Kevin',
//     'Statistics'
// ]);
// console.log('-----');

solve([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
]);
// console.log('--------');

// solve([
//     '12',
//     'Add=Bonnie=3=5',
//     'Add=Johny=4=4',
//     'Empty=All',
//     'Add=Bonnie=3=3',
//     'Statistics'
// ]);




/*
Amy reached the capacity!
Users count: 4
Mark - 12
Michael - 13
Blake - 13
Clark - 4*/

