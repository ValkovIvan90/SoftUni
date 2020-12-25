function metric(arg1, max1, max2) {
    let num = Number(arg1);

    if (max1==="m") {
        num=num*100;
    } else if(max1==="mm"){
        num=num/10;
    }
    if (max2==="m") {
        num=num/100
    } else if(max2==="mm"){
        num=num*10
    }
 
    console.log(num.toFixed(3))


}
metric()
