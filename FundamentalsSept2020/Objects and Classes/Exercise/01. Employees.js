function employess(arr) {
    let obj = {};

    for (const key of arr) {
        obj[key] = key.length;  //Наливам масива в Обекта!!
    }

     for (const key in obj) {
          console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
          
     }

}
employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])