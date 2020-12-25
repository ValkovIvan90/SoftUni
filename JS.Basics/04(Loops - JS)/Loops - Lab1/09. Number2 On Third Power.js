function number2ThirdPower(arg) {
    let num = Number(arg);
    let startIndex;
    if (num % 2 === 0) {
        startIndex = 2;

    } else {
        startIndex = 1;

    }
    for (let i = startIndex; i <= num; i += 2) {
        console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
    }
    
}
number2ThirdPower(6)
//(кратък вариaнт)!