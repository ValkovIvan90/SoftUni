function equalSumsEvenOddPosition(input) {
    let furstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let output = "";

    for (let i = furstNum; i <= secondNum; i++) {
        let strNum = i + " ";//преобразуваме число[i] в текст!
        let evenPosition = 0;
        let oddPosition = 0;
        for (let e = 0; e <strNum.length; e++) {

            if (e % 2 == 0) {
                evenPosition += Number(strNum[e]);//Обръщаме текстът (strNum[e]) в число!
            } else {
                oddPosition += Number(strNum[e]);
            }

        }
        if (evenPosition === oddPosition) {
            output += i + " ";//кавичките са за разстояние между цифрите!
        }

    }
    console.log(output);

// резултатът е текст(String)
}
equalSumsEvenOddPosition(['100000', '100050']);