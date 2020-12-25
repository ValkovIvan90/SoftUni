function konventor(radians) {
    radians = Number(radians);
    let degree = radians * 180 / Math.PI;
    console.log(degree.toFixed(0));

}
konventor("3.1416")