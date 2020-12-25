function arrayManipulation(arr) {
    let array = arr.shift().split(' ').map(Number);

    for (const key of arr) {
        let [command, num, num2] = key.split(' ');
        num = Number(num);
        num2 = Number(num2);
        if (command === 'Add') {
            array.push(num);
        }
        else if (command === 'Remove') {
            remove(num)

        } else if (command === 'RemoveAt') {
            array.splice(num, 1);
        } else if (command === 'Insert') {
            array.splice(num2, 0, num)
        }

    }
    function remove(num) {
        array = array.filter(el => el !== num);
    }
    console.log(array.join(' '));

}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])




/*⦁	Add {number}: add a number to the end of the array
⦁	Remove {number}: remove number from the array
⦁	RemoveAt {index}: removes number at a given index
⦁	Insert {number} {index}: inserts a number at a given index
*/