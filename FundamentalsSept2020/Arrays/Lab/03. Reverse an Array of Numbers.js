function reverseAnArrayOfNumbers(num, arr) {

    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(arr[i]);
    }
    let str='';

    for (let j = array.length-1; j>=0; j--) {
       str+=`${array[j]} `
        
    }
   console.log(str);
   
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])