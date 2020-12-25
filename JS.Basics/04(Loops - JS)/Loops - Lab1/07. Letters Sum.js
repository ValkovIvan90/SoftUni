function lettersSum(productName,controlNumber,budget) {
    let name =productName;
    let conNumber=Number(controlNumber);
    budget=Number(budget);
    price=0;
    
    for (let i = 0; i < name.length; i++) {
       
        if (name[i]==="a"||name[i]==="e"||name[i]==="i"||name[i]==="o"||name[i]==="u"||name[i]==="y") {
            price+=3;
        }else {
            price+=1;
        }
    }
    //price*=controlNumber;
    //total=Math.abs(budget-price);
      total=price*controlNumber;
      rest=budget-total;
    if (budget<total) {
            console.log(`Cannot buy ${name}. Product value: ${total.toFixed(2)}`);
        
    }else{
        console.log(`${name} bought. Money left: ${rest.toFixed(2)}`);
        
    }
    

    
    
}
lettersSum("milk","1.4","8")

