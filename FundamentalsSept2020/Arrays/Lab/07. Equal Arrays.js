function equalArray(firstArray,secondArray) {
    
    let sum=0;
    let index=0;
    let isEqual=false;
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i]===secondArray[i]) {
           sum+=Number(firstArray[i])
          isEqual=true;
      }
      else{
          isEqual=false;
          index=i;
          break;
      }
        
        
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
        
    }else{
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
}
equalArray(['10','20','30'], ['10','20','30'])