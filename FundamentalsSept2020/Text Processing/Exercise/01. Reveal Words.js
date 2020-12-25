function revealWords(word, text) {

    let newText = text;

    let words = word.split(', ');
    for (const key of words) {
        let find = '*'.repeat(key.length)
        if (newText.includes(find)) {
            newText = newText.replace(find,key);
        }
    }
    console.log(newText);



}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')

// revealWords('great, learning',
//     'softuni is ***** place for ******** new programming languages')