function fishingBoat(budget, season, fisherMan) {
    budget = Number(budget);
    fisherMan = Number(fisherMan);
    let total=0;
    let price = 0;

    if (season === "Spring" || season === "Summer" || season === "Autumn" || season === "Winter") {
        if (season === "Spring") {
            price = 3000;
            if (fisherMan <= 6) {
                price *= 0.90;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
        } else if (season === "Summer" || season === "Autumn") {
            price = 4200;
            if (fisherMan <= 6) {
                price *= 0.90;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;

            }


        } else if(season==="Winter"){
            price = 2600;
            if (fisherMan <= 6) {
                price *= 0.90;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
                         

        }
  
    }
    if (season!="Autumn"&&fisherMan%2===0) {
        price*=0.95;
    }
    total=(budget-price);
    if (budget>=price) {
        console.log(`Yes! You have ${total.toFixed(2)} leva left.`);
        
    }else{
        console.log(`Not enough money! You need ${Math.abs(total).toFixed(2)} leva.`);
        
    }
       
}
fishingBoat("2000","Winter","13")

