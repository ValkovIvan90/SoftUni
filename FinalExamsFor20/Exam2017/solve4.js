function solve(arr) {
    let listName = {};
    let presents = {};

    let line;
    while ((line = arr.shift()) !== 'END') {
        if (line.includes('Remove')) {
            let [comm, name] = line.split('->');
            delete listName[name];

        } else {
            let [name, toys, count] = line.split('->');
            count = Number(count);
            if (!listName.hasOwnProperty(name)) {
                listName[name] = {
                    count,
                }
                if (!presents.hasOwnProperty(toys)) {
                    presents[toys] = {
                        number: count,
                    }
                } else {
                    presents[toys].number += count;
                }
            } else {
                listName[name].count += count;
                if (!presents.hasOwnProperty(toys)) {
                    presents[toys] = {
                        number: count
                    }
                } else {
                    presents[toys].number += count;
                }
            }
        }




    };

    let sortedName = Object.keys(listName).sort((a, b) => listName[b].count - listName[a].count || a.localeCompare(b));
    console.log('Children:');
    for (const key of sortedName) {
        console.log(`${key} -> ${listName[key].count}`);

    }
    console.log('Presents:');
    for (const key in presents) {
        console.log(`${key} -> ${presents[key].number}`);

    }





}
// solve(['Sammy->Candy->12', 'Annie->Candy->12', 'Dannie->Candy->12', 'Dannie->Candy->12', 'END']);
// solve([
//     'Marty->Toys->5',
//     'Sam->Candy->20',
//     'Leo->Candy->10',
//     'Leo->Toys->1',
//     'Katy->Clothes->4',
//     'Bobbie->Clothes->6',
//     'Tanya->Phone->1',
//     'Nasko->Tablet->3',
//     'END'
//   ]
//   );
solve([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
]
)