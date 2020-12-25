function graduation(input) {
    index=0;
    let name =input[index];
    index++;
    num=1;
    total=0;


    while (num<=12) {
        let average = Number(input[index]);
        index++;
        if (average<4.00) {
          continue;
        }
        total+=average;
         num++;
    }
    console.log(`${name} graduated. Average grade: ${(total/12).toFixed(2)}`);
    
    
}
graduation([
    'Ani', '3',    '5.32',
    '6',   '5.43', '5',
    '6',   '5.5',  '4.55',
    '5',   '6',    '5.56',
    '6',   '5'
  ]);