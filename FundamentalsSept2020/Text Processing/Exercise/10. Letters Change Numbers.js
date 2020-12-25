function lettersVsNumbers(text) {
    
    let input = text.split(' ')

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let total = 0;
    for (let key of input) {
         if (key.length<1) {
             continue;
         }
        let firstChar = key[0].charCodeAt();
        let secondChar = key[key.length - 1].charCodeAt();
        key = Number(key.substring(1, key.length - 1));
        if (firstChar >= 65 && firstChar <= 90) {
            firstChar = (String.fromCharCode(firstChar)).toLowerCase();
            if (alphabet.includes(firstChar)) {
                let index = alphabet.indexOf(firstChar) + 1;
                key /= index;
            }
        } else {
            firstChar = (String.fromCharCode(firstChar));
            if (alphabet.includes(firstChar)) {
                let index = alphabet.indexOf(firstChar) + 1;
                key *= index;
            }
        }
        if (secondChar >= 65 && secondChar <= 90) {
            secondChar = (String.fromCharCode(secondChar)).toLowerCase();
            if (alphabet.includes(secondChar)) {
                let index = alphabet.indexOf(secondChar) + 1;
                key -= index;
            }
        } else {
            secondChar = (String.fromCharCode(secondChar));
            if (alphabet.includes(secondChar)) {
                let index = alphabet.indexOf(secondChar) + 1;
                key += index;
            }
        }

        total += key;


    }
    console.log(total.toFixed(2));

}
lettersVsNumbers('a1A')