function cutAndReverse(input) {

    return [input.substring(0, input.length / 2).
        split('').reverse().join(''),
    input.substring(input.length / 2).
        split('').reverse().join('')
    ].join('\n');

}
console.log(cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
