function equalSums(arr) {
     let leftSum = 0;
     let rightSum = 0;
     let sum = [];
     let max = arr.reduce(function (a, b) {
          return Math.max(a, b);
     });
    let count1=0;
     for (let i = 0; i < arr.length; i++) {
          count1++;
          if (count1===1&&arr[i]===max) {
               rightSum += Number(arr[i]);
               break;
          }
          if (arr[i]===max) {
               break
          }else{
               leftSum += Number(arr[i]);
          }
     }
     let count=0;
     for (let j = arr.length - 1; j >= 0; j--) {
          count++;
          if (count===1&&arr[j]===max) {
               rightSum += Number(arr[j]);
               break;
          }
          if (arr[j]===max) {
               break
          }else{
               rightSum += Number(arr[j]);
          }
     }
     if (arr.length===1) {
          console.log(0);
          
     }else if (leftSum===rightSum&&arr.length>3) {
          console.log(arr.indexOf(max));
          
     }else if(arr.length<=3){
          console.log('no');
          
     }
    

}
equalSums([1])
equalSums([1, 2])
equalSums([1, 2, 3, 3])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])