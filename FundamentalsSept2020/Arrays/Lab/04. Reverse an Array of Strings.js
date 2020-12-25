function reverseArrayOfStrings(arr) {
    
     let string=[];
    for (let i = arr.length-1; i>=0; i--) {
         
        string.push(arr[i]);
    }
    console.log(string.join(' '));
    
}
reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])