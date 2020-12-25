function Cake(input) {
  let height = Number(input.shift());
  let widht = Number(input.shift());
  let cakeSize = height * widht; //големина на тортата!!
  let total = 0;
  let command = input.shift();
  let result = 0;
  let isCakeEnough = true;

  while (command !== "STOP") {
    total += Number(command);
    if (total >= cakeSize) {
      result = Math.ceil(total - cakeSize);
      isCakeEnough = false;
      break;
    } else if (total < cakeSize) {
      result = cakeSize-total;
      isCakeEnough = true;
    }
    command = input.shift()
  }
  if (isCakeEnough) {
    console.log(`${result} pieces are left.`);

  } else {
    console.log(`No more cake left! You need ${result} pieces more.`);

  }

}
Cake([
  '10', '10',
  '20', '20',
  '20', '20',
  '21'
]
);