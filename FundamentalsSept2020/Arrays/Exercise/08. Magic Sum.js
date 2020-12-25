function magicSum(arr,n) {
    
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        let currentNum=arr[i];
        for (let j = i+1; j < arr.length; j++) {
             if (currentNum+arr[j]===n) {
                 result.push(`${currentNum} ${arr[j]}`)
                 
             }
             
            
        }
        
    }
    console.log(result.join('\n'));
    
}
magicSum([1, 2, 3, 4, 5, 6],
    6)