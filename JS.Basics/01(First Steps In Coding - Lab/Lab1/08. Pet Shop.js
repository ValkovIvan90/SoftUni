function petShop(dogS,dogM){
    let  dog1 = dogS;
    let dog2 = dogM;
    let price1= parseFloat(2.50);
    let price2 = parseFloat(4.00);
    let area = (dog1 * price1+dog2*price2).toFixed(2);
    console.log(area+' lv.');
    
    }
    petShop(5,4);