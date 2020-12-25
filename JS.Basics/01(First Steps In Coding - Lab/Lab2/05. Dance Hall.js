function danceHall(l,w,a){
    let l1= Number(l);
    let w2= Number(w);
    let a3 = Number(a);

    let hall = (l1* 100) * (w2*100);
    let wared= a3 *100;
    let waredo = wared * wared;
    let bench = hall/10 ;

    let freeSpase = hall - waredo - bench;
    let ownSpase = Number(40);
    let needSpase = Number(7000);

    let dancers = freeSpase/ (ownSpase+needSpase);
    console.log(Math.floor(dancers));
    

}
danceHall(50,25,2);
