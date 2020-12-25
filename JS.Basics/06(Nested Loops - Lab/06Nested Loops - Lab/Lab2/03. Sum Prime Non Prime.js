function SumPrimeNonPrime(input) {
  let index = 0;
  let num = input[index];
  index++;
  let sumOfPrimeNumber = 0;//сума на простите числа! (Дели се на 1 и на себе си!) пример 5 , 7
  let sumOfNoprimeNumber = 0;//сума на непростите числа! пример 3, 6,  9


  while (num != "stop") {
    num = Number(num);//променям типа  от Текс към Число
    let isPrime = true;// Булева стоиност !
    if (num < 0) {
      console.log("Number is negative.");
      num = input[index];// 
      index++;
      continue;
    }
    if (num === 1) {
      isPrime = false;
      
    }
    let maxDivider = Math.sqrt(num);//корен квадратен  от числото (нум1)
    for (let i = 2; i <=maxDivider; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }   
      
    }
    if (isPrime) {
      sumOfPrimeNumber += num;
    } else {
      sumOfNoprimeNumber += num;
    }
    num = input[index];
    index++;


  }
  console.log(`Sum of all prime numbers is: ${sumOfPrimeNumber}`);
  console.log(`Sum of all non prime numbers is: ${sumOfNoprimeNumber}`);

}
SumPrimeNonPrime([
  '3', '9',
  '0', '7',
  '19', '4',
  'stop'
]);