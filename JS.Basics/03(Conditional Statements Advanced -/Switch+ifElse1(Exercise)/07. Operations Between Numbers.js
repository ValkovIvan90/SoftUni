function operatBetweenNum(N1, N2, operator) {
    N1 = Number(N1);
    N2 = Number(N2);
    let result = 0;
   

    if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%") {
        if (operator === "+") {
            result = N1 + N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);

            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`)

            }
        } else if (operator === "-") {
            result = N1 - N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`)

            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`)
            }
        } else if (operator === "*") {
            result = N1 * N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`)
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`)
            }
        } else if (operator === "/") {
            result = N1 / N2;
            if (N2 != 0) {
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);

            } else {
                console.log(`Cannot divide ${N1} by zero`);

            }

        } else if (operator === "%") {
            result = N1 % N2;
            if (N2 != 0) {
                console.log(`${N1} % ${N2} = ${result}`);

            } else {
                console.log(`Cannot divide ${N1} by zero`);

            }
        }
    }



}


operatBetweenNum("10", "0", "%")