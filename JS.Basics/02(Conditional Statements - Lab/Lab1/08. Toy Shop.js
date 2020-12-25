function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let priceTrip = Number(arg1);
    let puzzle = Number(arg2);
    let talkingDoll = Number(arg3);
    let tedBear = Number(arg4);
    let minions = Number(arg5);
    let truck = Number(arg6);

    let price = (puzzle * 2.60) + (talkingDoll * 3) + (tedBear * 4.10) + (minions * 8.20) + (truck * 2);
    let toys = puzzle + talkingDoll + tedBear + minions + truck;

    if (toys >= 50) {
        price = price * 0.75;
    }
    price = price * 0.9;
    let diff = Math.abs(priceTrip - price);
    if (price >= priceTrip) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);

    }


}
toyShop("320", "8", "2", "5", "5", "1");



