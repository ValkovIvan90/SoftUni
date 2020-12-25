function solve(arr) {
    let passCount = Number(arr.shift());
    let countPass = 0;

    if (passCount === arr.length) {
        for (const key of arr) {
            let pattern = /(U\$)(?<name>[A-Z][a-z]+)\1(P@\$)(?<pass>[A-Za-z]{5,}\d+)\3/g;
            let match = pattern.exec(key);
            if (match) {
                console.log('Registration was successful');
    
                let name = match.groups.name;
                let password = match.groups.pass;
                console.log(`Username: ${name}, Password: ${password}`);
                countPass++;
            } else {
                console.log('Invalid username or password');
    
            }
        }
    }

    
    console.log(`Successful registrations: ${countPass}`);

}
solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);
console.log('------');

solve(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412']
)
console.log('--------');

solve([
    '3',
    'U$myU$-->P@$asdqwe123P@$',
    'Sara 1232412',
    'U$NameU$P@$Pass234P@$'
]
)