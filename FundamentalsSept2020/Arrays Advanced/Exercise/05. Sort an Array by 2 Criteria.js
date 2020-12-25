function sortAnArrayByTwo(arr) {

    let newArr = arr.sort((a, b) => a.localeCompare(b)).sort((a,b)=>a.length-b.length);

    
    console.log(newArr.join('\n'));


    // function sorting(a,b) {
    //     if (a.length>b.length) {
    //         return 1;
    //     }else if(a.length<b.length){
    //          return -1;
    //     }else {
    //         return 0
    //     }
         
    // }
}
sortAnArrayByTwo(["Isacc", "Theodor", "Jack", "Harrison", "George"])