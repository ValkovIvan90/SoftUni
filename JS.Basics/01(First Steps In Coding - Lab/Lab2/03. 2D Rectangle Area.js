function rectangle(x1, y1, x2, y2) {
   
    let hiegt =Math.abs (x1 - x2);
    let widht = Math.abs(y1 - y2);
    let area = hiegt*widht;
    let parameter = 2 * (hiegt+widht);
  console.log(area.toFixed(2));
  console.log(parameter.toFixed(2));
  
  

}
rectangle(30, 40, 70, -10);
