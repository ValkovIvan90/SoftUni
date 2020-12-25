function condenseArray(input) {
    let num = input;

    while (num.length >1) {
        let condenset = [];
        for (let i = 0; i < num.length - 1; i++) {
            condenset.push(num[i] + num[i + 1])

        }
        num = condenset;
    }

   console.log(num[0]);
   

}
condenseArray([1])