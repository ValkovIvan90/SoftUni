function bonusScore(arg) {
    let num = Number(arg);
    let bonusPoint = 0;

    if (num <= 100) {
        bonusPoint = 5;
    } else if (num > 1000) {
        bonusPoint =  0.1 *num;
    } else if (num > 100){
        bonusPoint =  0.2 *num;
    }if (num % 2 == 0) {
        bonusPoint++;
    } else if (num % 10 ==5) {
        bonusPoint += 2;
    }
    console.log(bonusPoint);
    console.log(bonusPoint + num);





}
bonusScore("20")