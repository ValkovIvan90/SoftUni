function areaOfFigur([arg1, arg2, arg3]) {
    let figur = arg1;
    let site1 = 0;
    let site2 = 0;
    let area = 0;


    if (figur == "square") {
        site1 = Number(arg2)
        area = site1 * site1;

    }
    else if (figur == "rectangle") {
        site1 = Number(arg2);
        site2 = Number(arg3);
        area = site1 * site2;

    } else if (figur == "circle") {
        site1 = Number(arg2);
        area = Math.PI * (site1 * site1);

    } else if (figur == "triangle") {
        site1 = Number(arg2);
        site2 = Number(arg3);
        area = site1 * site2 / 2;
    }
    console.log(Math.round(area * 1000) / 1000);







}
areaOfFigur(["rectangle", 7, 2.5]);