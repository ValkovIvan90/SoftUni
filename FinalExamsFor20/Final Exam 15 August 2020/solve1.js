function solve(arr) {
    let text = {
        Move(text, num) {
            num = Number(num)
            let first = text.slice(0, num);
            let last = text.slice(num);
            return last + first;

        },

        Insert(text, index, value) {
            index = Number(index);
            let first = text.slice(0, index);
            let last = text.slice(index);
            return first + value + last;
        },
        ChangeAll(text, subs, replac) {
            if (text.includes(subs)) {
                while (text.includes(subs)) {
                    text = text.replace(subs, replac.repeat(1));
                }
            }
            return text;
        }
    };

    let currentText = arr.shift();
    let line;

    while ((line = arr.shift()) !== 'Decode') {
        let [command, ...args] = line.split('|');
        currentText = text[command](currentText, ...args);
    }
    console.log(`The decrypted message is: ${currentText}`);

}
solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);





solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )