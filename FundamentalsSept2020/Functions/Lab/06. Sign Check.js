function wrongResult(num1, num2, num3) {

    let result = '';
    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        result = 'Positive';
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        result = 'Negative'
    } else if (num1 === 0 && num2 === 0 && num3 === 0) {
        result = 'Positive'
    }
    result=num1*num2*num3;
    if (result>=0) {
        return 'Positive'
    }else{
        return 'Negative'
    }
  
}
console.log(wrongResult(2,4,3));


