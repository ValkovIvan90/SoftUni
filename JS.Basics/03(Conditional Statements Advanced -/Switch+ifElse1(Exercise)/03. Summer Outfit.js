function summerOutfit(degrees, dayOrNight) {
    degrees = Number(degrees);
    let dayNight = dayOrNight;
    let Outfit="";
    let Shoes="";

    switch (dayNight) {
        case "Morning":
            if (degrees>=10&&degrees<=18) {
                Outfit="Sweatshirt";
                Shoes="Sneakers";
            }else if (degrees>18&&degrees<=24) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }else if(degrees>=25){
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (degrees>=10&&degrees<=18) {
                Outfit="Shirt";
                Shoes="Moccasins";
            }else if (degrees>18&&degrees<=24) {
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            }else if(degrees>=25){
                Outfit = "Swim Suit";
                Shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (degrees>=10&&degrees<=18) {
                Outfit="Shirt";
                Shoes="Moccasins";
            }else if (degrees>18&&degrees<=24) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }else if(degrees>=25){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
    



}
summerOutfit("25","Evening")