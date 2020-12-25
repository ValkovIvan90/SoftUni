function fuelMoney(distance,passagers,priceOneLitter) {
    let needDiesel=(distance/100*7)+(passagers*0.100);
    console.log(`Needed money for that trip is ${needDiesel*priceOneLitter}lv.`);
    
   
}
fuelMoney(90, 14, 2.88)