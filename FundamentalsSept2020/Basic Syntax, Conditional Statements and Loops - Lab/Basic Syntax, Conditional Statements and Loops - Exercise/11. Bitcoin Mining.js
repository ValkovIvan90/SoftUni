function bitcoinMining(input) {
    let oneBitcoin = 11949.16;
    let oneGrammGold = 67.51;
    let total = 0;
    let days = 0;
    let bitcoins = 0;
    let min = Number.MAX_VALUE;

    for (let i = 0; i < input.length; i++) {
        days++
        let sum = input[i] * oneGrammGold;

        if (days % 3 === 0) {
            sum = (input[i] * 0.70) * oneGrammGold;


        }
        total += sum;
        if (total >= oneBitcoin) {
            while (total > oneBitcoin) {
                total -= oneBitcoin;
                bitcoins++;
            }
            if (days < min) {
                min = days;
            }

        }

    }
    if (bitcoins === 0) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Left money: ${total.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${min}`);
        console.log(`Left money: ${total.toFixed(2)} lv.`);
    }





}
bitcoinMining([3124.15, 504.212, 2511.124]);