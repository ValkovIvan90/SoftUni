function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let isFreeSpace = true;
    let total = width * length * height;

    let command = input[index];
    index++;
    while (command !== "Done") {
        
        let box = Number(command);
        total -= box;
        if (total < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(total)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (isFreeSpace) {
        console.log(`${total} Cubic meters left.`);

    }

}
moving([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ]
  )