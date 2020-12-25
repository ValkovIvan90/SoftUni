// function palindrome(arr) {


//     for (let i = 0; i < arr.length; i++) {
//        let str=arr[i].toString();
//         for (let j = 0; j < str.length; j++) {
//             if (str[j]===str[str.length-1]) {
//                 console.log('true');
//                 break;

//             }
//             else{
//                 console.log('false');
//                 break;
//             }


//         }
//     }
// }
// palindrome([32,2,232,1010])

function palindrome(arr) {
    function rotateElement(array) {
        for (const element of array) {
            let toString = element.toString();
            for (let i = 0; i < toString.length; i++) {
                if (toString[i] === toString[toString.length - 1]) {
                    console.log('true');
                    break;

                }
                else {
                    console.log('false');
                    break;

                }

            }

        }
        
    }
    rotateElement(arr);


}
palindrome([32,2,232,1010]);

