function volleyball(years,feastDay,weekendsHome) {
    let home =Number(weekendsHome);
    feastDay=Number(feastDay);
    let yearsWeekend=48;
    let play1=yearsWeekend-weekendsHome;
       play1*=3/4;
       feastDay*=2/3;
    let total=play1+home+feastDay;

    if (years==="leap") {
        total*=1.15;
    }

 
    
   
    console.log(Math.floor(total));
    
    
}
volleyball("leap","0","1")