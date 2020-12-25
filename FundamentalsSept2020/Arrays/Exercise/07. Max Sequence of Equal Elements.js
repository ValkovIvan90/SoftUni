function maxSequenceOfEqualEl(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentEle =[arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentEle.push(arr[j])
            } else {
                break;
            }

        }
        if (result.length<currentEle.length) {
            result=currentEle;
        }

    }
    console.log(result.join(' '));
    

}


maxSequenceOfEqualEl([1, 1, 1, 2, 3, 1, 3, 3])