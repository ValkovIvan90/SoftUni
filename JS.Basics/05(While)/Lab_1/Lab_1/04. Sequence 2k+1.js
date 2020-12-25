function sequence(input) {
    let sum=1;
    let num=Number(input[0])
  
    

    while (sum<=num) {
        console.log(sum);
        
        sum=(sum*2)+1;

    }
    
}
sequence([17])