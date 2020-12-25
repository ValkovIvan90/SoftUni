function solve(arr) {
    let n = Number(arr.shift());
    let list = {};

    let commands = {
        Add(list, piece, composer, key) {

            if (list.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                list[piece] = {
                    name: composer,
                    key: key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);

            }
        },
        Remove(list, piece) {
            if (list.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`);

                delete list[piece];

            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);

            }
        },
        ChangeKey(list, piece, newKey) {
            if (list.hasOwnProperty(piece)) {
                let info = list[piece];
                info.key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);

            }
        }

    };

    let count = 0;
    while (count < n) {
        let [piece, name, key] = arr.shift().split('|');
        list[piece] = {
            name,
            key,
        }
        count++;
    }
    let line;
    while ((line = arr.shift()) !== 'Stop') {
        let [command, ...args] = line.split('|');
        commands[command](list, ...args);
    }

    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]) ||
        a[1].name.localeCompare(b[1].name));


        for (const key of sorted) {
            console.log(`${key[0]} -> Composer: ${key[1].name}, Key: ${key[1].key}`);
            
        };


}
// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
// console.log('---------------------');

  solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )


