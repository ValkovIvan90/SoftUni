function solve(arr) {
    let commCounts = Number(arr.shift());
    let list = arr.shift().split(' ').map(Number);
    let position = 0;
    for (let i = 0; i < commCounts; i++) {
        let line = arr.shift();
        let [command, ...args] = line.split(' ');
        [args] = [Number(args)];
        switch (command) {
            case 'Forward':
                return Forward(list, position, args);
            case 'Back':
                return Back(list, args);
            case 'Swap':
                return Swap(list, args);
            case 'Gift':
                return Gift(list, args);
        }
    }

}
solve([
    '5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3'
]
);

function Forward(list, position, steps) {
    list = list.splice(position+steps, 1,position);
}
function Swap(list, position, steps) {
    list = list.slice(position, position-2);
    return list;
}
function Gift(list, [index, housNumber] = [...args]) {

}
function Back(list, [firtsInd, secondInd] = [...args]) {

}