function centuriesToMinutes(year) {
    let centuries = year*100;
    let days = Math.trunc(centuries*365.2422);
    let hours = days*24;
    let minutes = hours*60;


    console.log(`${year} centuries = ${centuries} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}
centuriesToMinutes(5)
