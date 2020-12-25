function charityCampaign(arg1, arg2, arg3, arg4, arg5) {
    let days = Number(arg1);
    let Sweetsnumber = Number(arg2);
    let cakes = Number(arg3);
    let gofrets = Number(arg4);
    let pancakes = Number(arg5)
    let sumC = cakes * 45;
    let sumG = gofrets * 5.80;
    let sumP = pancakes * 3.20;
    let sum = (sumC + sumG + sumP) * Sweetsnumber;
    let Total = sum * days;
    let lastTotal = Total - (Total / 1 / 8);
    console.log(lastTotal.toFixed(2));




}
charityCampaign(131, 5, 9, 33, 46)