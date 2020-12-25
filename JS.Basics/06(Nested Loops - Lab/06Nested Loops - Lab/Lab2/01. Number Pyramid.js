function pyramid(input) {
    let n = Number(input[0]);
    let isBigger=false;
    let currentNum=1;
    let currentLine="";

    for (let i = 1; i <=n; i++) {
        for (let k = 1; k <=i; k++) {
            if (currentNum>n) {
                isBigger=true;
                break;
            }
            currentLine+=currentNum+" ";
            currentNum++;
            
        }
        console.log(currentLine);
        currentLine="";
        if (isBigger) {
            break;
        }
        
    }

}
pyramid(['7'])