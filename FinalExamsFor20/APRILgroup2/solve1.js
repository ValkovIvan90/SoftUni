function solve(arr) {
    let commnads = {
        TakeOdd(text) {
            let string = '';
            for (let i = 0; i < text.length; i++) {
                if (i % 2 == 1) {
                    string += text[i]
                }
            }
            console.log(string);

            return string;
        },
        Cut(text, index, length) {
            [index, length] = [Number(index), Number(length)];
            let first = text.slice(0, index);
            let second = text.slice(index + length);
            text = first + second;
            console.log(text);
            return text;

        },
        Substitute(text, subs, subsRepla) {
            if (text.includes(subs)) {
                while (text.includes(subs)) {
                    text = text.replace(subs, subsRepla.repeat(1));
                }
                console.log(text);

            } else {
                console.log('Nothing to replace!');

            }
            return text;
        },
    };
    let text = arr.shift();
    let line;
    while ((line = arr.shift()) !== 'Done') {
        let [command, ...args] = line.split(' ');
        text = commnads[command](text, ...args);

    }
    console.log(`Your password is: ${text}`);

}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);
//   solve([
//     'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
//     'TakeOdd',
//     'Cut 18 2',
//     'Substitute ! ***',
//     'Substitute ? .!.',
//     'Done'
//   ]);


