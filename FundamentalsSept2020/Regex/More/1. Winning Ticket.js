function winningTicket([arr]) {
    let whiteSpace = /[\,?\s+]+/g;
    let text = arr.split(whiteSpace);

    for (const key of text) {
        if (key.length === 20) {
            let pattern = /([A-Za-z]+)?[\@\^\#\$]{6,10}([A-Za-z]+)?/g;
            let result = key.match(pattern);
            if (result === null) {
                console.log(`ticket "${key}" - no match`);
                continue;
            }
            if (result[0] === result[1]) {
                let symbol = key[0];
                console.log(`ticket "${key}" - ${result[0].length}${symbol} Jackpot!`);
            } else {
                let currentArr = [];
                for (const key of result) {
                    let regexTwo = /[\@\^\#\$]+/g;
                    let newText = key.match(regexTwo);
                    currentArr.push(newText[0]);
                }
                if (currentArr[0] === currentArr[1]) {
                    let symb = currentArr[0][0];
                    console.log(`ticket "${key}" - ${currentArr[0].length}${symb}`);
                } else {
                    let count = 0
                    for (let i = 0; i < currentArr[0].length; i++) {
                         if (currentArr[0][i]===currentArr[1][i]) {
                             count++;
                         }else{
                            let symbD = currentArr[0][0];
                            console.log(`ticket "${key}" - ${count}${symbD}`);
                             break;
                         }
                    }
                }

            }

        } else {
            console.log("invalid ticket");
        }
    }
}
winningTicket(['@@@@@@@@@@et@@@@@@@@']);
// winningTicket([ 'Cash$$$$$$Ca$$$$$$sh' ]);
winningTicket([ '@@th@@@@@@e@@m@@@@@@' ]);


