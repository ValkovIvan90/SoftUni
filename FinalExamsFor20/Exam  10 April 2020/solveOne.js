function solve(arr) {

    let obj = {
        InsertSpace(text, index) {
            index = Number(index);
            let first = text.slice(0, index);
            let second = text.slice(index);
            text = first + ' ' + second;
            console.log(text);

            return text;
        },
        Reverse(text, subs) {

            if (text.includes(subs)) {
                let index = text.indexOf(subs);
                let word = text.slice(index, subs.length + index);
                word = word.split('').reverse().join('');
                let first = text.slice(0, index);
                let last = text.slice(subs.length + index);
                text = first + last + word;
                console.log(text);
            } else {
                console.log('error');

            }

            return text;
        },
        ChangeAll(text, subs, replace) {
            if (text.includes(subs)) {
                while (text.includes(subs)) {
                    text = text.replace(subs, replace.repeat(1))
                }
            }
            console.log(text);

            return text;
        },
    }
    let text = arr.shift();
    let line;

    while ((line = arr.shift()) !== 'Reveal') {
        let [command, ...args] = line.split(':|:');
        text = obj[command](text, ...args);
    }

    console.log(`You have a new text message: ${text}`);

}
solve([
    '1agugu2',
    'ChangeAll:|:agugu:|:vs',
    'Reveal'
])

console.log('--------------');

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:u',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);