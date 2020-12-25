function solve(arr) {

    let tour = {
        'Add Stop'(text, index, string) {
            index = Number(index);
            if (index >= 0 && index <= text.length) {
                let first = text.slice(0, index);
                let last = text.slice(index);
                text = first + string + last;
            }
            console.log(text);

            return text;
        },
        'Remove Stop'(text, startI, endI) {
            [startI, endI] = [Number(startI), Number(endI)];
            if (startI >= 0 && startI <= text.length && endI >= 0 && endI <= text.length) {
                let first = text.slice(0, startI);
                let last = text.slice(endI + 1);
                text = first + last;
            }
            console.log(text);

            return text;
        },
        Switch(text, oldString, newString) {
            if (text.includes(oldString)) {
                text = text.replace(oldString, newString.repeat(1));
                
            }
            console.log(text);

            return text;
        }
    }
    let text = arr.shift();


    let line;
    while ((line = arr.shift()) !== 'Travel') {
        let [command, ...args] = line.split(':');
        text = tour[command](text, ...args);
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);

}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:-7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
)