function graduation2(input) {
    let name = input.shift();//име на персона
    let num = 1;// клас номер!
    let total = 0;// punkt!
    let falls = 0;//неуспех при изпита!

    while (num <= 12) {
        let average = Number(input.shift());
        if (average >= 4.00) {
            total += average;
            num++;
        } else {
            falls += 1;
        }
        if (falls > 1) {
            console.log(`${name} has been excluded at ${num} grade`); break;

        }

    }
    if (falls < 2) {
        total = total / 12;
        console.log(`${name} graduated. Average grade: ${total.toFixed(2)}`);

    }

}
graduation2([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ]);