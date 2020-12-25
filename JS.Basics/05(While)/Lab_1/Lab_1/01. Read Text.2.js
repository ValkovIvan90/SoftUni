function readText(input) {
    //let index = 0;
    let text = input.shift();
   
    let count = 0;
   

    while (text !== "Stop") {
        count++;
        text = input.shift();
        
    }
    console.log(count);


}
readText(['Nakov', '1234', 'pass', '1324', '1234','324234', 'Stop'])