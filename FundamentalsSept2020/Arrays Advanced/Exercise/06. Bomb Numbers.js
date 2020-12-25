function bombNumbers(firstArr, secondArr) {

    let bombNumber = secondArr[0];
    let power = secondArr[1];
   
    for (let i = 0; i < firstArr.length; i++) {
        if(firstArr[i] === bombNumber) {
            let index = firstArr.indexOf(bombNumber);
            let start=Math.max(index-power,0);
            firstArr.splice(index,power+1);
            firstArr.splice(start, power);

        }

    }
    let result = firstArr.reduce((a, b) => a + b);
    console.log(result);


}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1])
bombNumbers([1, 4, 4, 2, 8, 9, 1],
[9, 3])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])

    //only 40 Points!!