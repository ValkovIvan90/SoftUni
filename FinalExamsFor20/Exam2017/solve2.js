function solve(arr) {
    let listPerfor = {};
    let participants = arr.shift().split(', ');

    for (const key of participants) {
        listPerfor[key] = {
            song: '',
            award: [],
        };
    };
    let songs = arr.shift();

    let line;
    let songSet = new Set(arr);
    songSet = Array.from(songSet)

    while ((line = songSet.shift()) !== 'dawn') {
        let [name, song, awardName] = line.split(', ');
        if (songs.includes(song)) {
            if (listPerfor.hasOwnProperty(name)) {
                let info = listPerfor[name];
                info.song = song;
                info.award.push(awardName);
            }
        }


    }


    let result = Object.keys(listPerfor).reduce(function (preve, key) {
        return preve + listPerfor[key].award.length;
    }, 0);
    if (result <= 0) {
        console.log('No awards');

    } else {
        let sorted = Object.entries(listPerfor).sort(sorting);

        for (const key of sorted) {
            if (listPerfor[key[0]].award.length > 0) {
                console.log(`${key[0]}: ${key[1].award.length} awards`);
                for (const line of key[1].award) {
                    console.log(`--${line}`);

                }
            }


        }

    };

    function sorting(a, b) {
        return b[1].award.length - a[1].award.length || a[0].localeCompare(b[0]);
    }



}

solve([
    'Trifon, Van, Gesha',
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Van, Dragana - Kukavice, Best Srabsko',
    'Van, Dragana - Kukavice, Best Srabsko',
    'Van, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Van, PHP Web, Educational 101',
    'dawn'
]);
console.log('-------------');

solve([
    'Gesha',
    "Bon Jovi - It's my life",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
]);
console.log('-------------');

solve(['Sino', 'Vasko Naidenov - Nova Godina', 'dawn']);