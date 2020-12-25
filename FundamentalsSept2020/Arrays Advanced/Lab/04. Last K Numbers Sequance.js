function lastKNumber(n,k) {
 
    let result=[1];

    for (let i = 1; i <  n; i++) {
       let lastKNumber=result.slice(-k);
    let sum=0;
       for (const num of lastKNumber) {
           sum+=num;
       }
        result.push(sum)
    }
 
   console.log(result.join(' '));
   
}
lastKNumber(6, 3)

// 1 1 2 4 7 13