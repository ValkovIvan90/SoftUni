function test1(arg1,arg2,arg3) {
    let income=Number(arg1);
    let succes=Number(arg2);
    let minSalary=Number(arg3);

    socialS=0;
    excellentS=0;

    if (succes>=4.50) {
        
        if (income<=minSalary) {
            socialS+=minSalary*0.35;
        }
        if(succes>=5.50) {
            excellentS+=succes*25;
        }

    }
    if (socialS>excellentS) {
        console.log(`You get a Social scholarship ${Math.floor(socialS)} BGN`);
        
    }else if(excellentS>socialS){
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentS)} BGN`);
        
    }else{
        console.log(`You cannot get a scholarship!`);
        
    }
}   
test1("300","5.65","420")