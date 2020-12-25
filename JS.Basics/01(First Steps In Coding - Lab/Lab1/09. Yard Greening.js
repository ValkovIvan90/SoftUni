function yardGreening(arg){
    let yard = arg;
    let Price  = yard * 7.61;
    let discount = 0.18 * Price;
    lastPrice =  Price - discount;

    
      console.log(`The final price is: ${lastPrice.toFixed(2)} lv.`);
      console.log(`The discount is: ${discount.toFixed(2)} lv.`);
      
      
          

    
}
yardGreening(540);