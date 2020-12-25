function journey(budget, season) {
    budget = Number(budget);
    let destination = "";
    let price = 0;
    let type = ""

    if (season === "summer") {
        if (budget <= 100) {
            price += (budget * 0.30);
            destination = "Bulgaria";
        } else if (budget > 100 && budget <= 1000) {
            price += (budget * 0.40);
            destination = "Balkans"
        } else {
            price += (budget * 0.90);
            destination = "Europe";
        }
        type = "Camp"
    } else if (season === "winter") {
        if (budget <= 100) {
            price += (budget * 0.70);
            destination = "Bulgaria"
        } else if (budget > 100 && budget <= 1000) {
            price += (budget * 0.80);
            destination = "Balkans"
        } else {
            price += (budget * 0.90);
            destination = "Europe";
        }
        type = "Hotel"
    }
    if (destination==="Europe") {
        type="Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
    

}
journey("312","summer")