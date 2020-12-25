function workshop(arg, arg1, arg2) {
    let teble =Number(arg);
    let lenght =Number(arg1);
    let widht =Number (arg2);
    let cover = teble * (lenght + 2 * 0.30) * (widht + 2 * 0.30);
    let square = teble * (lenght / 2) * (lenght / 2);
    let USD = (cover * 7) + (square * 9);
    let BGN = (USD * 1.85);
    console.log(USD.toFixed(2),'USD');
    console.log(BGN.toFixed(2),'BGN');


}
workshop(10, 1.20, 0.65)
