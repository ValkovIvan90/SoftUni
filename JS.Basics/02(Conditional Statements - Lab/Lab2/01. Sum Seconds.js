function sumSecond(arg1,arg2,arg3){
    let timefirts= Number(arg1);
    let secondTime= Number(arg2);
    let thridtime= Number(arg3);

    let total = timefirts+secondTime+thridtime;
     let minuts  = Math.floor(total/60);
     let seconds = total%60;

     if(seconds<10){
     console.log(`${minuts}:0${seconds}`);

     }else {
         console.log(`${minuts}:${seconds}`);
         
     }

    
      
    

}
sumSecond("14","12","10")