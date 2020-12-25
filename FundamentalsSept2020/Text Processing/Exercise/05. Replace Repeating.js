function replaceChars(text) {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) {
            text =text.substring(1);
            i=i-1;
        } else[
            newText += text[i]
        ]
    }
   console.log(newText);
   
}
replaceChars('aaaaabbbbbcdddeeeedssaa')
replaceChars('qqqwerqwecccwd')