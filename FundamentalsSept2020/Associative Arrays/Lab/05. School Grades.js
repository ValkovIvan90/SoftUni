function schollGrades(arr) {
    let map = new Map();

    for (const key of arr) {
        let tokens = key.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number)
        if (!map.has(name)) {
            map.set(name, [])

            map.set(name, map.get(name).concat(grades))
        } else {
            map.set(name, map.get(name).concat(grades))
        }
    }

    let sorted = Array.from(map);
    sorted.sort(average)

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function average([nameA, gradesA], [nameB, gradesB]) {
        let avgA = 0;

        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;

        avgB = 0;
        gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;

        return avgA - avgB;
    }

}
schollGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])