function onTheTimeForExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arrivalHour = Number(arrivalHour);
    arrivalMinute = Number(arrivalMinute);

    let examTimeMinutes = examHour * 60 + examMinute;
    let studentTimeInMinutes = arrivalHour * 60 + arrivalMinute;

    let differenceTime = examTimeMinutes - studentTimeInMinutes;
    let positiveDifference = Math.abs(differenceTime);

    let hours = Math.floor(positiveDifference / 60);
    let minutes = positiveDifference % 60;

    if (differenceTime < 0) {
        console.log("Late");
        if (hours === 0) {
            console.log(`${minutes} minutes after the start`);

        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);

            } else {
                console.log(`${hours}:${minutes} hours after the start`);

            }
        }
    } else if (differenceTime <= 30) {
        console.log("On time");
        if (minutes !== 0) {
            console.log(`${minutes} minutes before the start`);

        }
    } else {
        console.log("Early");
        if (hours === 0) {
            console.log(`${minutes} minutes before the start`);

        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);

            } else {
                console.log(`${hours}:${minutes} hours before the start`);

            }
        }
    }

}
onTheTimeForExam("16", "00", "15", "00")