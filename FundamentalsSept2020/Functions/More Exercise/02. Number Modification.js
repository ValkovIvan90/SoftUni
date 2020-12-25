function numberModification(num) {
   
 
    function getSum(number) {
      let toString=number.toString();
      let sum=0;
      for (let i = 0; i < toString.length; i++) {
        sum+=Number(toString[i]);
      }
      return sum;
    }
    function getAverage(num) {
      return getSum(num)/num.toString().length;
    }
     
    while (getAverage(num)<5) {
      num+='9';
    }
     return num;
     
  }
  console.log(numberModification(101));