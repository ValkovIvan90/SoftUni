function minerTask(arr) {
    let resource = {};

    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let count = Number(arr[i + 1]);
        if (resource.hasOwnProperty(name)) {
            resource[name] += count;
        } else {

            resource[name] = count;
        }

    }
   for (const key in resource) {
       console.log(`${key} -> ${resource[key]}`);
       
   }

}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])