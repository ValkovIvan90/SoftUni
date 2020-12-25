function reverseChars(a, b, c) {
    let chars = a + b + c;
    let string = '';
    for (let i = chars.length-1; i >= 0; i--) {

        string += chars[i]+' ';

    }

    console.log(string);

}
reverseChars('A',
'B',
'C')