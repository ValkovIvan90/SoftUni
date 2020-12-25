function verySpecialNum(start,end,n) {
    start=Number(start);
    end=Number(end);
let num=Number(n);
for (let i = start; i <=end; i++) {
    let numberPow=Math.pow(n,2)
    //let numberPow=n**2(втори пример !)
    if (i%numberPow===0) {
       console.log(`Very special number: ${i}`);
       
        
    }else if(i%num===0){
        console.log(`Special number: ${i}`);
        
    }else{
        console.log(i);
        
    }
}

}
verySpecialNum("1","25","3")