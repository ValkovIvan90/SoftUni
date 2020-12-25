function mergeArrays(firstArray,secondArray) {
   let newString=[];
     for (let i = 0; i < firstArray.length; i++) {
       if (i%2!==1) {
           newString.push(Number(firstArray[i])+Number(secondArray[i]));
       }
       else{
           newString.push(firstArray[i]+''+secondArray[i])
       }
     }
     console.log(newString.join(' - '));
     
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])