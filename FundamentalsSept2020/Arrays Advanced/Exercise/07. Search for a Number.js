function searchForNumbers(firstArr, secondArr) {



    let newArray = [];
    for (let i = 0; i < secondArr[0]; i++) {
        let arr = firstArr.shift()
        newArray.push(arr);

    }
    newArray.splice(0, secondArr[1]);
    let count = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === secondArr[2]) {
            count++;
        }

    }
    console.log(`Number ${secondArr[2]} occurs ${count} times.`);
    
}
searchForNumbers([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);