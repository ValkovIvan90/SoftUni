function stringSub(word,text) {
    let newText=text.toLowerCase();
    let newWord=word.toLowerCase();
   let words= newText.split(' ')
    if (words.includes(newWord)) {
        console.log(newWord);
        
    }else{
        console.log(`${word} not found!`);
        
    }
    
}
stringSub('JavaScript',
'JavaScript is the best programming language')