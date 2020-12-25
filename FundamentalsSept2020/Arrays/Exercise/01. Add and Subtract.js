// function addAndSubtract(arr) {

//     let sumOfOriginalArrray = arr.reduce((a, b) => a + b);

//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             newArray.push(arr[i] - i)
//         } else {
//             newArray.push(arr[i] + i)
//         }

//     }
//     console.log(newArray);
//     console.log(sumOfOriginalArrray);
//     console.log(newArray.reduce((a,b)=>a+b));



// }
// addAndSubtract([5, 15, 23, 56, 35])




///2

function sumSub(array) {
    function sum(arr) {
        let arrSum = 0;
        for (const el of arr) {
            arrSum += el;
        }
        return arrSum;
    }
    let firstSum = sum(array);

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element % 2 == 0) {
            array[i] += i;
        } else {
            array[i] += i;
        }

    }
    let secondSum = sum(array);
    

    console.log(array);
    console.log(firstSum);
    console.log(secondSum);


}
sumSub([-5, 11, 3, 0, 2])