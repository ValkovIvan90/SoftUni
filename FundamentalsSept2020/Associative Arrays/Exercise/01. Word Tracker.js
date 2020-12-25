function wordTracker(arr) {
    let repeatWords = arr.shift().split(' ');
    let obj = {};
    repeatWords.forEach(el => {
        obj[el] = 0
    });
    arr.forEach(word => {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1
        }
    });
    let sorted = Object.entries(obj).sort((a,b)=>{
        let first = a[1];
        let second = b[1];
        return second - first;
    })
     for (let[key,values] of sorted) {
         console.log(`${key} - ${values}`);
         
     }
    

}

wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this','sentence',  'is', 'your','sentence',  'task'
])