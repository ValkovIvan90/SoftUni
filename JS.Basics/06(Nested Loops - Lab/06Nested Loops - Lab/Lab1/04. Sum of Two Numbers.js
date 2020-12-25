function sumOfTwoNUmbers(input) {
    let furstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let coint = 0;
    let isFound = false;
    for (let i = furstNum; i <= secondNum; i++) {
        for (let k = furstNum; k <= secondNum; k++) {
            let total = i + k;
            coint++;
            if (total === magicNum) {
                console.log(`Combination N:${coint} (${i} + ${k} = ${total})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break
        }
    }
    if (isFound === false) {
        console.log(`${coint} combinations - neither equals ${magicNum}`);
    }

}
sumOfTwoNUmbers(['1', '10', '5'])