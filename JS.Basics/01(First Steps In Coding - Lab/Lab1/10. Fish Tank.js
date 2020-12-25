function fishTank(lenght,widht,height,prozent){
    let sum = lenght*widht*height;
    let Sl  = sum*0.001;
    let P = prozent*0.01;
    let Total = Sl *(1-P);
    console.log(Total.toFixed(3));
    


}
