function sumOfOddNumbers(n) {
    let count=0;
    let num =1;
    let total =0 ;
    while (count<n) {
        if (num%2!==0) {
            console.log(num);
            
           count++; 
           total+=num;
        }
        num++
        
        
    }
    console.log(`Sum: ${total}`);
    
}
sumOfOddNumbers(3)