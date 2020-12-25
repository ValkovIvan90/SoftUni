function oldBooks(input) {
    let wantedBooks = input.shift();
    let library = Number(input.shift());
    checkedBooks = 0;
    let isFound = false;


    while (checkedBooks < library) {
        let currentBooks = input.shift();
        if (currentBooks !== wantedBooks) {
            checkedBooks++;
        } else {
            isFound = true;
            break;
        }
    }
    if (isFound == true) {
        console.log(`You checked ${checkedBooks} books and found it.`);

    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);

    }

}
oldBooks(['Troy', '8', 'Stronger', 'Life Style', 'Troy']
);