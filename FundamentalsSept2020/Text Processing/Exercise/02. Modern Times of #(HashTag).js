function hashTag(text) {
    let result = [];
    let newText = text.split(' ');

    for (const word of newText) {
        let curentWord = '';
        if (word[0] === '#' && word.length > 1) {
            for (let i = 1; i < word.length; i++) {
                let char = word[i].charCodeAt()
                if (char >= 65 && char <= 90 || char >= 97 && char <= 122) {
                    curentWord += word[i]
                } else {
                    curentWord = '';
                    break;
                }

            }
        } else {
            continue;
        }
        if (curentWord.length > 0) {
            result.push(curentWord)
        }

    }
    console.log(result.join('\n'))


}
hashTag('Nowadays everyone uses # to tag a #special word in #socia2lMedia')