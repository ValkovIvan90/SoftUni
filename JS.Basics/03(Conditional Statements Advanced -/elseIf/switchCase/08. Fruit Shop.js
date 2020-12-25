function fruitShop(type, day, quantity) {
    quantity = Number(quantity);
    price = 0;
    let isError = false;


    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (type) {
            case "banana":
                price = quantity * 2.50;
                break;
            case "apple":
                price = quantity * 1.20;
                break;
            case "orange":
                price = quantity * 0.85;
                break;
            case "grapefruit":
                price = quantity * 1.45;
                break;
            case "kiwi":
                price = quantity * 2.70;
                break;
            case "pineapple":
                price = quantity * 5.50;
                break;
            case "grapes":
                price = quantity * 3.85;
                break;
                default:isError=true;
        }

    } else if (day === "Saturday" || day === "Sunday") {
        switch (type) {
            case "banana":
                price = quantity * 2.70;
                break;
            case "apple":
                price = quantity * 1.25;
                break;
            case "orange":
                price = quantity * 0.90;
                break;
            case "grapefruit":
                price = quantity * 1.60;
                break;
            case "kiwi":
                price = quantity * 3.00;
                break;
            case "pineapple":
                price = quantity * 5.60;
                break;
            case "grapes":
                price = quantity * 4.20;
                break;
                default:isError=true;
        }
        

    }else {
         isError=true;      
    }

    if(!isError){
        console.log(price.toFixed(2));
        
    }else{
        console.log("error");
        
    }
  
    

}
fruitShop("grapefruit",
"Saturday","1.25");

