function phoneBook(arr) {
    let phoneBook={};

  for (const key of arr) {
      let[name,phone]=key.split(' ');

      phoneBook[name]=phone;
  }

  for (const key in phoneBook) {
       console.log(`${key} -> ${phoneBook[key]}`);
       
  }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])