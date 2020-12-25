function maxNumber(input) {
    let index =0;
    let num =Number(input[index]);
    index++;
    let maxNumber =Number.MIN_SAFE_INTEGER;
    let total=0;
    while (total<num) {
      let coint=Number(input[index]);
      index++;
      if (coint>maxNumber) {
          maxNumber=coint;
      }
      total++;

    }
    console.log(maxNumber);
    
}
maxNumber([ '5', '45', '300', '7', '99','123' ])