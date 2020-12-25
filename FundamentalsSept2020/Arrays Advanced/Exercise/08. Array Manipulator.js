function arrayManipulator(integers, commands) {
    let currCommand = commands.shift();


    function add(arr, tokens) {
        arr.splice(+tokens[0], 0, +tokens[1])
        return arr;
    }
    function addMany(arr, tokens) {
        let index = +tokens.shift();
        for (let value of tokens) {
            arr.splice(index++, 0, value);
        }
        return arr;
    }
    function remove(arr,tokens) {
        arr.splice(Number(tokens[0]),1);
        return arr;
    }
    function shift(arr,tokens) {
        let position = Number(tokens[0]);
        while (position>0) {
            let el = arr.shift();
            arr.push(el);
            position--;

        }
        return arr;
    }
    function sumPairs(arr) {
        let newArrayT = [];
        while (arr.length > 0) {
            let sum = 0;
            let pair = arr.splice(0, 2);
            sum += pair.reduce((a, b) => a + b);
            newArrayT.push(sum);
        }
        return newArrayT;
    }

    while (currCommand !== 'print') {
        let tokens = currCommand.split(' ');
        switch (tokens.shift()) {
            case 'add':
                integers = add(integers, tokens)
                break;
            case 'addMany':
                integers = addMany(integers, tokens)
                break;
            case 'contains':
                console.log(integers.indexOf(Number(tokens[0])));
                
                break;
            case 'remove':
                    integers = remove(integers, tokens)
                break;
            case 'shift':
                    integers = shift(integers, tokens)
                break;
            case 'sumPairs':
                    integers = sumPairs(integers, tokens)
                break;

        }

        currCommand = commands.shift();
    }

    console.log(`[ ${integers.join(', ')} ]`);
     
}
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"])
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])


    // only 90 points!!