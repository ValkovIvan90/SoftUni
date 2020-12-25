function solve(text) {

    let valid = /(@[#]{1,})(?<element>[A-Z][A-Za-z0-9]{4,}[A-Z])(@[#]{1,})/g;
    let num = /\d/g;

    let count = Number(text.shift());

    for (let i = 0; i < count; i++) {
        let validMatch = text.shift().match(valid);
        if (validMatch) {
            let numbers = validMatch.toString().match(num);
            if (numbers === null) {
                console.log(`Product group: ${'00'}`)
            } else {
                let result = ''
                for (const key of numbers) {
                    result += key;
                }
                console.log(`Product group: ${result}`);

            }

        } else {
            console.log('Invalid barcode');

        }


    }

//80pt


}
solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46s@##']);
console.log('---------');

solve([
    '6',
    '@##Val1d1teM@######',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@#InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);