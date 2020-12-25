function rotateArray(arr) {
    let rotation=arr.pop();
     rotation=Number(rotation);
    for (let i = 0; i < rotation; i++) {
        let lastElement=arr.pop();
        arr.unshift(lastElement);
        
    }
    if (isNaN(rotation)) {
        console.log('Empty');
        
    }
    else{
        console.log(arr.join(' '));
    }
   
    
    
}
rotateArray(['remove', 'remove', 'remove'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
rotateArray(['1', '2', '3', '4', '2'])