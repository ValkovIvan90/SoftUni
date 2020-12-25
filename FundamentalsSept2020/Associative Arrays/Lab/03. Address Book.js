function addressBook(arr) {
    let addressBook = {};

    for (const key of arr) {
        let [name, address] = key.split(':');
        if (addressBook.hasOwnProperty(name)) {
            addressBook[name] = address
        }
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook);
      
    sorted.sort((a,b)=>{
        let nameA=a[0];
        let nameB=b[0];
        return nameA.localeCompare(nameB);
    })
    for (let[name,address] of sorted) {
        console.log(`${name} -> ${address}`);

    }




}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])