function miniNumber(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER
    let total = 0;

    while (total < num) {
        let coint = Number(input[index]);
        index++;
        if (coint < minNumber) {
            minNumber = coint;
        }
        total++;

    }
    console.log(minNumber);

}
miniNumber([ '4', '45', '-20', '7', '99' ])