function magicMatrix(arr) {
    function collectionNum(a,b){
        return a+b;
    }

    let sumOfRowOne=arr[0].reduce(collectionNum);
    let sumOfRowLast=arr[arr.length-1].reduce(collectionNum);

    if (sumOfRowOne===sumOfRowLast) {
        let sumOfleftCol=0;
        let sumOfRightCol=0;
        for (let i = 0; i < arr.length; i++) {
            sumOfleftCol+=arr[i][0];
            sumOfRightCol+=arr[i][arr.length-1];
            
        }
        return sumOfleftCol==sumOfRightCol && sumOfRightCol==sumOfRowOne?
        true:false;
    }else{
        return false;
    }

}
console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));


