function maxNumber(arr) {
    let maxNumber = [];
    let max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            if (arr[i] > max) {
                max = arr[i];
            }
            maxNumber.push(arr[i]);
        }
        if (arr.length === i + 1) {
            maxNumber.push(arr[i]);
            max = arr[i];
        }
    }
    if (maxNumber[0] < maxNumber[1]) {
        console.log(max);
    } else {
        console.log(maxNumber.join(' '));
    }
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
