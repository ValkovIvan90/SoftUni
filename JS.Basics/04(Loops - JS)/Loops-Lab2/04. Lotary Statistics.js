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
    console.log(`${((p1 / num) * 100).toFixed(2)}%`);
    console.log(`${((p2 / num) * 100).toFixed(2)}%`);
    console.log(`${((p3 / num) * 100).toFixed(2)}%`);
    console.log(`${((p4 / num) * 100).toFixed(2)}%`);


}
lotaryStatistics(49)