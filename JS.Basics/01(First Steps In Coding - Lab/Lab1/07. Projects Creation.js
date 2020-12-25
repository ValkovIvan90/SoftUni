function concatenateDate(arg1,arg2) {
    let name = arg1;
    let projeckt =Number(arg2);

    let time = projeckt*3;

    console.log(`The architect ${name} will need ${time} hours to complete ${projeckt} project/s.`);
    
}
concatenateDate("George",4)