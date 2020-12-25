function sumFirstLastNumber(arr) {
  let newArray=arr.map(Number);

  let sum=firstFindNumber(newArray)+lastFindNumber(newArray);

  function firstFindNumber() {
      return newArray[0];
  }
  function lastFindNumber() {
      return newArray[newArray.length-1];
  }
  console.log(sum);
  
}
sumFirstLastNumber(['15', '30', '40'])