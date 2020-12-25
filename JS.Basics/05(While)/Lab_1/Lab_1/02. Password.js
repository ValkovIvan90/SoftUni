function password(input) {
    let index=0;
    let userName=input[index];
    index++;
    let password=input[index];
    index++;
    let date =input[index];
    index++;

    while (date!==password) {
        date=input[index];
        index++;
    }

    console.log(`Welcome ${userName}!`);
    
}
password(['Nakov', '1234', 'pass','1324', '1234' ])