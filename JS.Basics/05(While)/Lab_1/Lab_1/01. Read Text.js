function readText(input) {
    let index = 0;
    let text = input[index];
    index++;
    let count = 0;
   

    while (text !== "Stop") {
        count++;
        text = input[index];
        index++;
    }
    console.log(count);


}
readText(['Nakov', '1234', 'pass', '1324', '1234', 'Stop'])