function speedInfo(arg){
    let km=Number(arg);
    if (km<=10) {
        console.log("slow");
        
    }else if(km<=50){
        console.log("average");
        
    }else if(km<=150){
        console.log("fast");
        
    }else if (km<=1000){
        console.log("ultra fast");
        
    }else{
        console.log("extremely fast");
        
    }
    }
    speedInfo(40)