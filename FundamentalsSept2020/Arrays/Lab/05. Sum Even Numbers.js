function sumEvenNumbers(arr) {
    
  let sum=0;
    for (let i = 0; i < arr.length; i++) {
         let number=Number(arr[i]);
         if(number%2===0)  {
             sum+=number;
         }     
    }
    console.log(sum);
    
}
sumEvenNumbers(['2','4','6','8','10'])