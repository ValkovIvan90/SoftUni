function hotelRoom(monthOfYear, nightNum) {
    let mohnt = monthOfYear;
    nightNum = Number(nightNum);

    let studio = "";
    let apartmant = "";

    if (mohnt === "May" || mohnt === "October") {
        studio = nightNum * 50.00;
        apartmant = nightNum * 65.00;
        if (nightNum >7 && nightNum <= 14) {
            studio *= 0.95;
        } else if(nightNum>14) {
            studio *= 0.70;
        }
    } else if (mohnt === "June" || mohnt === "September") {
        studio = nightNum * 75.20;
        apartmant = nightNum * 68.70;
        if (nightNum >14) {
            studio *= 0.80;
        }

    } else if (mohnt === "July" || mohnt === "August") {
        studio = nightNum * 76.00;
        apartmant = nightNum * 77.00;
    }
    if (nightNum > 14) {
        apartmant *= 0.90;
    }

    console.log(`Apartment: ${apartmant.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);



}
hotelRoom("May","15")
