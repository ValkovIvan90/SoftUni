function neighbor(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');
    for (let key of neighborhoods) {
        map.set(key, []);
    }
    input.forEach(element => {
        let [neighb, person] = element.split(' - ');
        if (map.has(neighb)) {
            let existing = map.get(neighb);
            existing.push(person)
        }

    });
    let entries = [...map]
    entries.sort((a, b) => {
        let first = a[1]
        let second = b[1];
        return second.length - first.length;
    })
    for (let [neighb, person] of entries) {
        console.log(`${neighb}: ${person.length}`);
        if (person.length > 0) {
            for (const key of person) {
                console.log(`--${key}`);
            }
           

        }

    }



}
neighbor(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])