function tradeCommission(town, sale) {
    sale = Number(sale);
    commission = 0;
    let isError = false;


    switch (town) {
        case "Sofia":
            if (sale >= 0 && sale <= 500) {
                commission = sale * 0.05;
            } else if (sale > 500 && sale <= 1000) {
                commission = sale * 0.07;
            } else if (sale > 1000 && sale <= 10000) {
                commission = sale * 0.08;
            } else if (sale > 10000) {
                commission = sale * 0.12;
            } else {
                isError = true;
            }
            break;




        case "Varna":
            if (sale >= 0 && sale <= 500) {
                commission = sale * 0.045;
            } else if (sale > 500 && sale <= 1000) {
                commission = sale * 0.075;
            } else if (sale > 1000 && sale <= 10000) {
                commission = sale * 0.10;
            } else if (sale > 10000) {
                commission = sale * 0.13;
            } else {
                isError = true;
            }
            break;



        case "Plovdiv":
            if (sale >= 0 && sale <= 500) {
                commission = sale * 0.055;
            } else if (sale > 500 && sale <= 1000) {
                commission = sale * 0.08;
            } else if (sale > 1000 && sale <= 10000) {
                commission = sale * 0.12;
            } else if (sale > 10000) {
                commission = sale * 0.145;
            } else {
                isError = true;
            }
            break;
        default:
            isError = true;


    }

    if (!isError) {
        console.log(commission.toFixed(2));


    } else {
        console.log("error");

    }

}
tradeCommission("Burgas", "1500")