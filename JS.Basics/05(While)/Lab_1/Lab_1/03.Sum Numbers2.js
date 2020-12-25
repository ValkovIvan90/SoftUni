function name(input) {
    let sum=0;
    let text = input.shift();
  
    while (text!=="Stop") {
        sum+=Number(text);
  
        text=input.shift()
    }
        console.log(sum);
  
    
  }
  name([ '10', '20', '30', '45', 'Stop' ])                                                                        