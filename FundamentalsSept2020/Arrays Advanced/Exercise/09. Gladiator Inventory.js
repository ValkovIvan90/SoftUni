function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    function buy(arr, el) {
        if (!arr.includes(el)) {
            arr.push(el);
        }
        return arr;
    }
    function remove(arr, el) {
       if (arr.includes(el)) {
        let index = arr.indexOf(el);
        arr.splice(index, 1);
        return arr;
       }
    }
    function repair(arr, el) {
        if (arr.includes(el)) {
            let index = arr.indexOf(el);
            arr.splice(index, 1);
            arr.push(el);
        }
        return arr;
    }
    function upgrade(arr,el) {
        let inventEl=el.split('-');
        if (arr.includes(inventEl[0])) {
            let index=arr.indexOf(inventEl[0]);
            arr.splice(++index,0,`${inventEl[0]}:${inventEl[1]}`)
        }
        return arr;
    }

    for (const key of arr) {
        let [command, element] = key.split(' ');
        switch (command) {
            case 'Buy':
                buy(inventory, element)
                break;
            case 'Trash':
                remove(inventory, element)
                break;
            case 'Repair':
                repair(inventory, element)
                break;
            case 'Upgrade':
                upgrade(inventory,element)
                break;
        }


    }
    console.log(inventory.join(' '));
    

}
// gladiatorInventory(['SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])

/*⦁	Buy {equipment}
⦁	Trash {equipment}
⦁	Repair {equipment}
⦁	Upgrade {equipment}-{upgrade}
*/