function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let float = parseInt(sum);
    sum !== float ? console.log(`${sum} - Float`) : console.log(`${sum} - Integer`)



}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)