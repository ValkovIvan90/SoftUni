function alcoholMarket(wiskeyPrice, bierLiters, wineLiters, brandyLiters, wiskeyLiters) {
    let wiskeyP = Number(wiskeyPrice);
    let bier = Number(bierLiters);
    let wine = Number(wineLiters);
    let brandy = Number(brandyLiters);
    let wiskey = Number(wiskeyLiters);

    let brandyPrice = wiskeyP/ 2;
    let winePrice = brandyPrice - (0.4 * brandyPrice);
    let bierPrice = brandyPrice - (0.8 * brandyPrice);

    let brandySum = brandy * brandyPrice;
    let wineSum = wine * winePrice;
    let bierSum = bier * bierPrice;
    let wiskeySum = wiskey * wiskeyPrice;
    let TotalSum = brandySum + wineSum + bierSum + wiskeySum;
    console.log(TotalSum.toFixed(2));





}
alcoholMarket(63.44, 3.57, 6.35, 8.15, 2.5);
