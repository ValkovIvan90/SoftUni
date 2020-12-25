function cleverLily(age, priceWashingMashinen, toyPrice) {

    age = Number(age);
    let priceWashing = Number(priceWashingMashinen);
    toyPrice = Number(toyPrice);

    let toysNum = 0;
    let savedMoney = 0;
    let lastMoney = 0;


    for (let year = 1; year <= age; year++) {

        if (year % 2 !== 0) {
            toysNum++;


        } else {
            savedMoney += (year * 5) - 1;
            lastMoney += 10;
        }


    }
    let totalSavedMoney = (toysNum * toyPrice) + savedMoney;
    let restMoney = Math.abs(totalSavedMoney - priceWashing)

    if (totalSavedMoney >= priceWashing) {
        console.log(`Yes! ${restMoney.toFixed(2)}`);

    } else {
        console.log(`No! ${restMoney.toFixed(2)}`);

    }


}
cleverLily("10","170","6")