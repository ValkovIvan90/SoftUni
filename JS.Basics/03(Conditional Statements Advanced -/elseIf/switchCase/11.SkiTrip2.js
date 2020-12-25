function skiTripe(arg1,arg2,arg3) {
    let days=Number(arg1);
    let roomsType=arg2;
    let evaluation=arg3;
    let price=0;
    days=days-1;
     
    switch (roomsType) {
        case "room for one person":
            price = days * 18; 
            break;

        case "apartment":
            price = days * 25;
            if (days < 10) {
                price *= 0.70;
            } else if (days >= 10 && days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50
            } break;


        case "president apartment":
            price = days * 35;
            if (days < 10) {
                price *= 0.90
            } else if (days >= 10 && days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            } break;

    }
    if (evaluation === "positive") {
        price = price *1.25;
    } else {
        price = price *0.90;
    }
    console.log(price.toFixed(2));


}
skiTripe("12","room for one person","positive")