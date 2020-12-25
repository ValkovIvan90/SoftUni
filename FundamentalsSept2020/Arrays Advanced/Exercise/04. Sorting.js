function sorting(arr) {
    let biggest=arr.sort(sorting).length;
    let newArr=[];

    for (let i = 0; i < biggest; i++) {
       let biggestNum=arr.pop();
       let smallest=arr.shift();
        newArr.push(biggestNum,smallest);
        
    }
    
    console.log(newArr.join(' '));
    function sorting(a,b) {
        if (a>b) {
            return 1;
        }else if (a<b) {
            return -1;
        }else{
            return 0 ;
        }
    }
    
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

// 94 1 69 2 63 3 52 18 31 21