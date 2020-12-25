function lotaryStatistics(arg) {
    let num = Number(arg);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            if (i < 10) {
                p1++;

            }
            if (i % 10 === 7) {
                p3++

            }
        } else {
            p2++;

        }
        if (100 % i === 0) {
            p4++;
        }


    }
    let firstPercent = (p1 / num) * 100;
    let secondPercent = (p2 / num) * 100;
    let thridPercent = (p3 / num) * 100;
    let fourtPercent = (p4 / num) * 100;
    console.log(`${firstPercent.toFixed(2)}%`);
    console.log(`${secondPercent.toFixed(2)}%`);
    console.log(`${thridPercent.toFixed(2)}%`);
    console.log(`${fourtPercent.toFixed(2)}%`);


}
lotaryStatistics(49)