function sumDigit(num) {
    let sum=0;
    let str=num.toString();
    for (let i = 0; i < str.length; i++) {
        sum+=Number(str[i]);
        
    }
    console.log(sum);
    
}
sumDigit(245678)