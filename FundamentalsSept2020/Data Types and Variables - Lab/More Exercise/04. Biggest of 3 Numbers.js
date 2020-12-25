function biggestOf3Numbers(firstNumber,secondNumber,thridNumber) {
    let isBigger=Number.MIN_SAFE_INTEGER;

    if (firstNumber>isBigger) {
        isBigger=firstNumber;
    }
    if (secondNumber>isBigger) {
        isBigger=secondNumber;        

    }
     if (thridNumber>isBigger) {
        isBigger=thridNumber;        
    }
    console.log(isBigger);
    
    
}
biggestOf3Numbers(-2,
    7,
    10)