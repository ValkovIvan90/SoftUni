function swimmPool(secTime,meters,timeForOneMeter){
    let seconds=Number(secTime);
    let distance =Number(meters);
    let timeOne=Number(timeForOneMeter);
    
    let sum = distance*timeOne;
    let waterStr = Math.floor(distance/15)*12.5;
    let total =sum+waterStr;
    totalSum=0;
    
    if (seconds<=total) {
        totalSum=total-seconds;
        console.log(`No, he failed! He was ${totalSum.toFixed(2)} seconds slower.`);
        
    } else if(seconds>=total){
        console.log(`Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`);
        
    }
    
    }
    swimmPool("55555.67","3017","5.03")