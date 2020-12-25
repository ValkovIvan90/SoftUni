function password2(input) {
    let userName=input.shift();
    let password=input.shift();
    let date =input.shift();


    while (date!==password) {
        date=input.shift();
    }
    console.log(`Welcome ${userName}!`);
    
}
password2(['Nakov', '1234', 'pass','1324', '1234' ])
