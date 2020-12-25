function numberOnThridPower(arg) {
    let num=Number(arg);

    if (num%2!=0) {
        for (let i = 1; i <= num; i++) {
         if (i%2===1) {
             let power=i**3;
             console.log(`Current number: ${i}. Cube: ${power}`);
             
         }            
        }
    }else{
        for (let i = 1; i <= num; i++) {
            if (i%2===0) {
                let power=i**3;
                console.log(`Current number: ${i}. Cube: ${power}`);
                
            }            
           }

    }
}
numberOnThridPower("5")
