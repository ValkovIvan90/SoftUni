function solve(arr) {

    let rawKey = arr.shift();


    let obj = {

        Contains(rawKey, subs) {
            if (rawKey.includes(subs)) {
                console.log(`${rawKey} contains ${subs}`);

            } else {
                console.log('Substring not found!');

            };
            return rawKey;
        },

        Slice(rawKey, start, end) {
            [start, end] = [Number(start), Number(end)];
            let firstT = rawKey.slice(0, start);
            let middT = rawKey.slice(start, end);
            let lastT = rawKey.slice(end);
            let result = firstT+lastT  
            console.log(result);
            return rawKey = firstT+lastT;     
             
        },
        Flip(rawKey, command, start, end) {
            [start, end] = [Number(start), Number(end)];
            let result = ''
            let firstT = rawKey.slice(0, start);
            let middT = rawKey.slice(start, end);
            let lastT = rawKey.slice(end);

            if (command === 'Upper') {
                middT = middT.toUpperCase()
            } else {
                middT = middT.toLowerCase();
            }
            result = firstT + middT + lastT;
            console.log(result);            
           return result;

        }
    }
    let line;
    while ((line = arr.shift()) !== 'Generate') {
        let [command, ...arg] = line.split('>>>');
        rawKey = obj[command](rawKey, ...arg);

    }
    console.log(`Your activation key is: ${rawKey}`);
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);
// solve([
//     '134softsf5ftuni2020rockz42',
//     'Slice>>>3>>>7',
//     'Contains>>>-rock',
//     'Contains>>>-uni-',
//     'Contains>>>-rocks',
//     'Flip>>>Upper>>>2>>>8',
//     'Flip>>>Lower>>>5>>>11',
//     'Generate'
//   ]);