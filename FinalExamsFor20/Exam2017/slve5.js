function solve(arr) {
    let batch = Number(arr.shift());
    let singleCookieGram = 25;
    let cupGram = 140;
    let smallSpoonGram = 10;
    let bigSpoonGram = 20;

    let cookiePerBox = 5;

    arr = arr.map(Number);
    let box =0;
    let total = 0;
    for (let i = 0; i < arr.length; i += 3) {
        let flour = arr[i];
        let sugar = arr[i + 1];
        let cocoa = arr[i + 2];
        let cupFlour=Number.parseInt(flour/cupGram);
        let spoonSugar=Number.parseInt(sugar/bigSpoonGram);
        let spoonCocoa=Number.parseInt(cocoa/smallSpoonGram);
        let flotRest=(flour/cupGram)/10;
       let cockies = ((flour+sugar+cocoa)*Math.floor(flour+sugar+cocoa))/singleCookieGram;
       cockies=cockies/cookiePerBox;
       console.log(cockies);
       

    }

    console.log(`Total boxes: ${total}`);

}
// solve([
//     '2', '200',
//     '300', '500',
//     '100', '200',
//     '50'
// ]);

console.log('##########################');

  solve([ '1', '1400', '200', '100' ]);

