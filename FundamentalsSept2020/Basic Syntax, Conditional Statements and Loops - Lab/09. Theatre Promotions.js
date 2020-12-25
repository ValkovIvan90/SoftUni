function theatrePromotions(day, age) {

    +age;
    let price = 0;
    let isError=false;

    switch (day) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                price += 12;
            } else if (age > 18 && age <= 64) {
                price += 18
            } else if (age > 64 && age <= 122) {
                price += 12;
            } else {
                
               isError=true;
            }
            break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                price += 15;
            } else if (age > 18 && age <= 64) {
                price += 20;
            } else if (age > 64 && age <= 122) {
                price += 15;
            } else {
                
                 isError=true;
            }
            break;
        case "Holiday":
            if (age >= 0 && age <= 18) {
                price += 5;
            } else if (age > 18 && age <= 64) {
                price += 12;
            } else if (age > 64 && age <= 122) {
                price += 10;
            } else {
                 isError=true
            }
            break;



    }
    if (isError) {
        console.log("Error!");
    }else{
        console.log(price+"$");
    }
    
    
}

theatrePromotions('Weekday',
    12)