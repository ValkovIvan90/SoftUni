function regEx([arr]) {
    let numbers = /\d/g;
    let emoji = /(\:{2}|\*{2})[A-Z][a-z]{2,}\1/g;

    let cooll = arr.match(numbers).map(Number).reduce((a, b) => a * b);
    console.log(`Cool threshold: ${cooll}`);
    
    let words = arr.match(emoji);
    let array=[];
    for (const key of words) {
        let word = key.slice(2, -2);
        let result = 0
        for (let i = 0; i < word.length; i++) {
            let numOfChar = word.charCodeAt(i);
              result+=numOfChar;
        }
        if (result>cooll) {
            array.push(key);
        }
    }
 console.log(`${words.length} emojis found in the text. The cool ones are:`);
   for (const line of array) {
       console.log(`${line} `);
       
   }

}
regEx([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);
console.log('__________________');


regEx([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ]);

