function partyTime(arr) {
    let list = {
        vip: [],
        regular: [],
    }
    let guest = arr.shift()
    while (guest !== 'PARTY') {
        if (Number.isInteger(Number(guest[0]))) {
            list.vip.push(guest)
        } else {
            list.regular.push(guest)
        }
        guest = arr.shift()
    }

    let newList = remove(arr, list)
    let sort = sorting(newList)
    console.log(sort);

    function remove(arr, listObj) {
        arr.forEach(el => {
            if (listObj.vip.includes(el)) {
                let index = listObj.vip.indexOf(el)
                listObj.vip.splice(index, 1);
            }
            if (listObj.regular.includes(el)) {
                let index = listObj.regular.indexOf(el)
                listObj.regular.splice(index, 1);
            }
        });
        return listObj
    }

    function sorting(arr) {
      let output=arr.vip.concat(arr.regular)
      return output.length + '\n' + output.join('\n')
    }
    

}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])