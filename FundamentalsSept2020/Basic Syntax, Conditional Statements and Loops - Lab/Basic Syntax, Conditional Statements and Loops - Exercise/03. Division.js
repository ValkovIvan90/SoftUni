function division(n) {
    let result = 0;
    if (n % 10 === 0) {
        result = 10;
        console.log(`The number is divisible by ${result}`);
    } else if (n % 7 == 0) {
        result = 7;
        console.log(`The number is divisible by ${result}`);
    } else if (n % 6===0){
     result=6;
     console.log(`The number is divisible by ${result}`);
    } else if (n % 3==0){
     result=3;
     console.log(`The number is divisible by ${result}`);
    } else if (n % 2===0){
     result=2;
     console.log(`The number is divisible by ${result}`);
    }else{
        console.log('Not divisible');
    }


}
division(30)