function vacantion(countOfPeople, type, dayOfWeek) {
    let price = 0;

    switch (dayOfWeek) {
        case 'Friday':
            if (type === 'Students') {
                price = countOfPeople * 8.45;
            } else if (type === 'Business') {
                price = countOfPeople * 10.90;
            } else if (type === 'Regular') {
                price = countOfPeople * 15;
            }
            break;
        case 'Saturday':
            if (type === 'Students') {
                price = countOfPeople * 9.80;
            } else if (type === 'Business') {
                price = countOfPeople * 15.60;
            } else if (type === 'Regular') {
                price = countOfPeople * 20;
            }
            break;
        case 'Sunday':
            if (type === 'Students') {
                price = countOfPeople * 10.46;
            } else if (type === 'Business') {
                price = countOfPeople * 16;
            } else if (type === 'Regular') {
                price = countOfPeople * 22.50;
            }

            break;
    }
    if(type==='Students'&&countOfPeople>=30){
        price*=0.85;
    }else if (type==='Business'&&countOfPeople>=100) {
        price=price-((price/countOfPeople)*10);
    }else if (type==='Regular'&&countOfPeople>=10&&countOfPeople<=20) {
        price*=0.95
    }
    console.log(`Total price: ${price.toFixed(2)}`);
    

}

vacantion(30,
    "Business",
    "Sunday")