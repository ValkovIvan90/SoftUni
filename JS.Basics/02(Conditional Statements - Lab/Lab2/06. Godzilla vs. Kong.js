function filmStudio(budget, numOfstatist, clothingPrice) {
    let num1 = Number(budget);
    let num2 = Number(numOfstatist);
    let num3 = Number(clothingPrice);
    let dekorSum = num1 * 0.1;
    let clotSum = num2 * num3;

    if (num2 > 150) {
        clotSum = clotSum - (clotSum * 0.1);

    }
    let totalSum = dekorSum + clotSum;
    let diff = Math.abs(totalSum - num1);

    if (dekorSum + clotSum > num1) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);


    } else {
        console.log("Action");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);


    }







}
filmStudio("9587.88"," 222"," 55.68")