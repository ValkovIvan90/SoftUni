function solve(arr) {
    let key = Number(arr.shift());

    let line;
    let newArray = [];

    while ((line = arr.shift()) !== 'end') {
        let message = '';
        for (let i = 0; i < line.length; i++) {
            let char = line.charCodeAt(i) - key;
            message += String.fromCharCode(char);
        }
        newArray.push(message);
    };



    for (const key of newArray) {
        let pattern = /@(?<name>[A-Za-z]+).[^\@\-\!\:\>]+!(?<type>[A-Z])!/g;
        let match = pattern.exec(key);
        if (match) {
            let name = match.groups.name;
            let isGood = match.groups.type;
            if (isGood === 'G') {
                console.log(name);

            }
        }

    }

}
solve([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);

console.log('---------');

solve([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
]);

console.log('---------');

solve([
    '3',
    'N}eideidmk$(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
]);