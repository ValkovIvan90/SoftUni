function sumNumbers(input) {
    let sum=0;
    let index=0;
    let text=input[index];
    index++;
    
    
    
    while (text!=="Stop") {
        sum+=Number(text);
        
      text=input[index];
      index++;
    }
    console.log(sum);
    
}
sumNumbers([ '10', '20', '30', '45', 'Stop' ])