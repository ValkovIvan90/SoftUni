// function factorialDivision(numOne, numTwo) {
//     function sum(a) {
//         let result = 1;
//         for (let i = a; i > 0; i--) {
//             result *= i;

//         }
//         return result;
//     }
//     let firstNum = sum(numOne);
//     let secondNum=sum(numTwo);

//     return( firstNum/secondNum).toFixed(2)


// }
// console.log(factorialDivision(5, 2));
function factorialDivision(numOne, numTwo) {
    let array = [];
        function recursion(x) {
            
            array.push(x)
            if (x > 1) { recursion(x - 1); }

            return  array;
            function multi(array) {
                let result=array.reduce((a,b)=>a*b);
                return result;
            }
            multi(array)
        }
      




        recursion(numOne);
        recursion(numTwo);
        let total=multi(array);

        console.log(total);
        

        // let result = 1;
        // for (let i = 0; i < array.length; i++) {
        //     result *= array[i];

        // }
        // return (result / b).toFixed(2);

}
console.log(factorialDivision(5, 2));
