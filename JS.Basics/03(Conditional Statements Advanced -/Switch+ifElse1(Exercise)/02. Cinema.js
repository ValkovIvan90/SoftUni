function cinema(type, rows, columns) {
    rows=Number(rows);
    columns=Number(columns);
     let seats=rows*columns;
     let price=0;

    switch(type){
        case "Premiere":
            price=seats*12.00;
            break;
        case "Normal":
            price=seats*7.50;
            break;
        case "Discount":
            price=seats*5.00;
            break;
    }
    console.log(price.toFixed(2));
    
}
cinema("Discount","12","30")