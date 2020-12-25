function spiceMustFlow(yielD) {
    let workedDays = 0;
    let totalAmout = 0;
    let workers = 26;
    while (yielD >= 100) {

        totalAmout += yielD - workers;
        yielD -= 10;
        workedDays++;
    }
    if (yielD >= 26 && workedDays > 0) {
        totalAmout -= workers;
    };
    console.log(workedDays);

    console.log(totalAmout);

}
spiceMustFlow(200);