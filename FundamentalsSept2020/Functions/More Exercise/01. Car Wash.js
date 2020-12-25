function carWash(arr) {
     
    function add(array) {
        let result=0;
        for (let i = 0; i < array.length; i++) {
            if (array[i]==='soap') {
                result+=10;
            }else if(array[i]==='water'){
                result*=1.20;
            }else if(array[i]==='vacuum cleaner'){
                  result*=1.25;
            }else{
                result*=0.90;
            }
            
        }
        return result;
    }

    let total=add(arr).toFixed(2);
    console.log(`The car is ${total}% clean.`);
    
    
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);





// soap – add 10 to the value
// water – increase the value with 20%
// vacuum cleaner – increase the value with 25%
// mud – decrease the value with 10%
