function firstAndLastK(arr) {
    let k = arr.shift();
    let firstKNumber=arr.slice(0,k);
    let lastKNumber=arr.slice(-k);

    console.log(firstKNumber.join(' '));
    console.log(lastKNumber.join(' '));
    
}
firstAndLastK([3,
    6, 7, 8, 9]);
