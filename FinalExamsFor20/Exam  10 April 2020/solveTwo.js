function solve([text]) {
    let pattern = /(\@|\#)[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let match = text.match(pattern);


    if (match) {
        let newArray = [];
        console.log(`${match.length} word pairs found!`);
        for (const line of match) {
            let firstWord = line.slice(0, line.length / 2);
            let secondWord = line.slice(line.length / 2);
            secondWord = secondWord.split('').reverse().join('');
            if (firstWord === secondWord) {
                newArray.push(line)
            }

        }
        if (newArray.length===0) {
            console.log('No mirror words!');
        }else{
              console.log('The mirror words are:');
        let result = '';
        for (const key of newArray) {
            let first = key.slice(0, key.length / 2);
            let second = key.slice(key.length / 2);
            first = first.slice(1, first.length - 1);
            second = second.slice(1, second.length - 1);
            result += first + ' <=> ' + second + ', ';
        }
        result = result.slice(0, result.length - 2);
        console.log(result);
        }
      
    }else{
        if (match===null) {
            console.log('No word pairs found!');
            console.log('No mirror words!');
        }
    }

 
}
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
console.log('___------_____');

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('==========');

solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);