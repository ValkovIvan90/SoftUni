function passwordGenerator(arr) {
    let concatString = arr[0].concat(arr[1]);
    let word = arr[2].toUpperCase().split('');

    for (const key of concatString) {
        let char = key.charCodeAt();
        if (char === 97 || char === 101 || char === 105 || char === 111 || char === 117) {
            concatString = concatString.replace(String.fromCharCode(char), word[0]);
            let newChar = word.shift();
            word.push(newChar);

        }

    }
   
    
    let newPassword = concatString.split('').reverse().join('')
    console.log(`Your generated password is ${newPassword}`);

}
passwordGenerator([
    'easymoneyeazylife',
    'atleasttencharacters',
'absolute'
])

//srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA