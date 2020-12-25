function stringOccur(text, word) {
    let count = 0;
    let newText=text.split(' ')
   for (const key of newText) {
       if (key===word) {
           count++;
       }
   }
 
    console.log(count);
    
}
stringOccur("This is a word and it also is a sentence",
    "is")