function race(arr) {

    let obj = {};
    let names = arr.shift().split(', ');
    for (const name of names) {
        obj[name] = 0;
    }
    let command = arr.shift();
    while (command !== 'end of race') {
        let pattern = /[A-Za-z]+/g;
        let name = command.match(pattern).join('');
        let digits = /[\d]/g;
        let sum = command.match(digits).map(Number).reduce((a, b) => a + b);
        if (obj.hasOwnProperty(name)) {
            obj[name] += sum
        }
        command = arr.shift();
    }
    let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);

}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
)