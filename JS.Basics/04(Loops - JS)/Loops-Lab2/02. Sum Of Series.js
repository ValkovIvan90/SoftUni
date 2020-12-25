function sumOfSeries(arg) {
  let num =Number(arg);
  let index =0;

  for (let i = 1; i <=num; i++) {
     
      index+=Math.pow(i,2);
      //index+=i*i
      
      
  }

  console.log(index);
}
sumOfSeries(4)