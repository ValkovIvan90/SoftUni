function solve(arr) {
    let actions = {
        'Make Upper'(text) {
            text = text.toUpperCase();
            console.log(text);

            return text

        },
        'Make Lower'(text) {
            text = text.toLowerCase();
            console.log(text);

            return text
        },
        'GetDomain'(text, count) {
            count = Number(count);
            text = text.slice(-count);
            console.log(text);
            return text
        },
        'GetUsername'(text) {

            if (text.includes('@')) {
                let index = text.indexOf('@');
                let name = text.slice(0, index);
                console.log(name);

            } else {
                console.log(`The email ${text} doesn't contain the @ symbol.`)

            }
            return text;


        },
        'Encrypt'(text) {
            let array = [];
            for (let i = 0; i < text.length; i++) {
                array.push(text.charCodeAt(i))

            }
            console.log(array.join(' '));
            return text;
        },
        'Replace'(text, char) {
            if (text.includes(char)) {
                while (text.includes(char)) {
                    text = text.replace(char, '-'.repeat(1));
                }
            }
            console.log(text);
            return text;

        }

    };

    let text = arr.shift();
    let line;
    while ((line = arr.shift()) !== 'Complete') {
        if (line.includes('GetDomain') || line.includes('Replace')) {
            let [command, ...args] = line.split(' ');
            actions[command](text, ...args);
        } else {
            text = actions[line](text);
        }
    }
}
solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
]);
//   solve([
//     'AnotherMail.com',
//     'Make Lower',
//     'GetUsername',
//     'Replace a',
//     'Complete'
//   ]);

