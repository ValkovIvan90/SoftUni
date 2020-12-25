function journey(budget, season) {
    budget = Number(budget);
    let price = 0;

    if (season === "summer") {
        if (budget <= 100) {
            price = budget * 0.30;
        } else if (budget <= 1000) {
            price = budget * 0.40;
        } else {
            price = budget * 0.90;
        }
    } else {
        if (budget <= 100) {
            price = budget * 0.70;
        } else if (budget <= 1000) {
            price = budget * 0.80;
        } else {
            price = budget * 0.90;
        }
    }
    if (budget <= 50) {
        console.log(`Somewhere in Bulgaria`);
        console.log(`Camp - ${price.toFixed(2)}`);
    }else if (budget<=100) {
        console.log(`Somewhere in Bulgaria`);
        console.log(`Hotel - ${price.toFixed(2)}`);
    }else if (budget <=500) {
        console.log(`Somewhere in Balkans`);
        console.log(`Camp - ${price.toFixed(2)}`);
    }else if (budget<=1000) {
        console.log(`Somewhere in Balkans`);
        console.log(`Hotel - ${price.toFixed(2)}`);
    }else{
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${price.toFixed(2)}`);
        
    }



}
journey("75", "winter")