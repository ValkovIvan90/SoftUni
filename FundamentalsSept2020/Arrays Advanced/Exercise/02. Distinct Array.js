function distinctArray(arr) {
    let newArr = [];
    while (arr.length !== 0) {
        let num = arr.shift();
        let count=0;
        for (let i = 0; i < arr.length; i++) {
             count++;
            if (num === arr[i]) {

                arr.splice(count-1,1)
            }


        }
        newArr.push(num)
    }

    console.log(newArr.join(' '));


}
distinctArray([20,8, 12, 13, 4, 4, 8, 5])
distinctArray([1, 2, 3, 4])
// const result = words.filter(word => word.length > 6);

// Only 80 punkts in Judge!!!


// function distingArray(input) {
//     let output = [];

//     for (let i = 0; i < input.length; i++) {
//         if (!output.includes(input[i])) {
//             output.push(input[i]);
//         }
//     }

//     return output.join(' ')
// }
// console.log(distingArray([20, 8, 12, 13, 4, 4, 8, 5]));  
