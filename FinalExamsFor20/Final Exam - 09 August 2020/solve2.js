function solve(text) {
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g;
    let match = text.match(pattern);

    result =[]
    let sum = 0;
    if (match) {
        for (const key of match) {
            let word = key.slice(1, -1);
            result.push(word)
           
            sum += word.length
        }
    } 
    console.log(`Destinations: ${result.join(', ')}`);
    
    console.log(`Travel Points: ${sum}`);



}
solve('=ai=/876/=Invalid/invalid==i5valid=/I5valid/=i=');
console.log('-----------------');

solve('ThisIs some InvalidInput');