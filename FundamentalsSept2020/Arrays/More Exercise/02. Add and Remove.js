function addAndRemove(arr) {
    let number=0;
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        let command=arr[i];
        number++;
        if (command!=='remove') {
            
            result.push(number)
        }else{
            
            result.pop(number)
        }
        
    }
    if (result.length===0) {
        console.log('Empty');
        
    }else{
        console.log(result.join(' '));
    }
  
    
}
addAndRemove(['add', 'add', 'add', 'add'])