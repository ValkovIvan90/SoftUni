function newHouse(type, flowersNum, budget) {
    flowersNum = Number(flowersNum);
    budget = Number(budget);
    let price = 0;
    let total = 0;

    if (type === "Roses" || type === "Dahlias" || type === "Tulips" || type === "Narcissus" || type === "Gladiolus") {
        if (type === "Roses") {
            price = flowersNum * 5;
            if (flowersNum > 80) {
                price *= 0.90;
            }
        }
        if (type === "Dahlias") {
            price = flowersNum * 3.80;
            if (flowersNum > 90) {
                price *= 0.85;
            }
        }
        if (type === "Tulips") {
            price = flowersNum * 2.80;
            if (flowersNum > 80) {
                price *= 0.85;
            }
        }
        if (type === "Narcissus") {
            price = flowersNum * 3;
            if (flowersNum <120) {
                price *= 1.15;
            }
        }
        if (type === "Gladiolus") {
            price = flowersNum * 2.50;
            if (flowersNum < 80) {
                price *= 1.20;
            }
        }

    }
    total = (budget - price);

    if (budget >= price) {

        console.log(`Hey, you have a great garden with ${flowersNum} ${type} and ${total.toFixed(2)} leva left.`);

    } else if (budget <= price) {
        console.log(`Not enough money, you need ${Math.abs(total).toFixed(2)} leva more.`);

    }




}
newHouse("Gladiolus", "64", "160")

//- "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
