// function charactersInRange(firstChar, secondChar) {
//     firstChar = firstChar.charCodeAt();
//     secondChar = secondChar.charCodeAt();

//     let result = '';
//     function asci(a, b) {
//         if (a > b) {
//             for (let i = b + 1; i < a; i++) {

//                 result += String.fromCharCode(i) + ' ';
//             }
//         } else {
//             for (let i = a + 1; i < b; i++) {

//                 result += String.fromCharCode(i) + ' ';


//             }
//         }


//         return result;
//     }

//     console.log(asci(firstChar, secondChar));

// }
// charactersInRange('a',
// 'd')


//2
function charInrange(a, b) {
    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);

    let start = firstCode < secondCode ? firstCode : secondCode;
    let end = firstCode > secondCode ? firstCode : secondCode;
    let line = '';
    for (let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i)+' ';
    }

    return line;

}
console.log(charInrange('a', 'd'));
