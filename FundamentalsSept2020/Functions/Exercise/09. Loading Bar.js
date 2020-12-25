function loadingBar(num) {
    
    let text='';
    let newNum=num/10;
    for (let i = 1; i <=10; i++) {
       if (i<=newNum) {
          text+='%';
       }
       else{
           text+='.';
       }
    }
    if (num===100) {
        console.log('100% Complete!');
        console.log(`[${text}]`);
        
    }else{
        console.log(`${num}% [${text}]`);
        console.log('Still loading...');
    }
    
  
   
}
loadingBar(15);

