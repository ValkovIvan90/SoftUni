function sumFirstAndLast(arr) {
    let firstElement=+arr.shift();
    let lastElement=+arr[arr.length-1];

    console.log(firstElement+lastElement);
    
    
}
sumFirstAndLast(['20', '30', '10'])