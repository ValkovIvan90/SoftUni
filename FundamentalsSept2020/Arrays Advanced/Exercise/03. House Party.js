function houseParty(arr) {
    let array = [];

    for (const key of arr) {
        let text = key.split(' ');
        let name = text[0];
        if (!text.includes('not')) {

            if (!array.includes(name)) {
                array.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }

        } else {
            if (array.includes(name)) {
                array = array.filter(guestName => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`);

            }
        }


    }
    console.log(array.join('\n'));

}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])