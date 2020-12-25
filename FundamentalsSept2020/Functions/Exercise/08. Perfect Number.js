function perfectNumber(n) {
     
    function checkForPerfection(num) {
        let result=0;
        for (let i = 1; i < num; i++) {
            if (num%i==0) {
                result+=i;
            }
            
        }
        return result===n? 'We have a perfect number!':" It's not so perfect."
    }
     
     return checkForPerfection(n); 
     
}
console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));
