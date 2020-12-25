// function oddAndEvenNumber(num) {
//     let toString=num.toString();
//     let oddSum=0;
//     let evenSum=0;

//     for (let i = 0; i < toString.length; i++) {
//          if (toString[i]%2==0) {
//              evenSum+=Number(toString[i]);
//          }
//          else{
//              oddSum+=Number(toString[i]);
//          }


//     }
//       console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);



// }
// oddAndEvenNumber( 3495892137259234)


//2

function OddEven(num) {
    let arr = String(num).split('');
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (num % 2 == 0) {
         sumEven+=num;
        }else{
            sumOdd+=num;
        }

    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
console.log(OddEven(3495892137259234));

