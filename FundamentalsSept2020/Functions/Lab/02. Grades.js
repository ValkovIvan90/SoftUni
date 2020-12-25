function grades(grade) {
    result = '';
    let  failResult='';
    if (grade < 3.00) {
        failResult=2;
    } else if (grade >= 3.00 && grade < 3.50) {
        result = 'Poor';
    } else if (grade >= 3.50 && grade < 4.50) {
        result = 'Cood';
    } else if (grade >= 4.50 && grade < 5.50) {
        result = 'Very good';
    } else if(grade>=5.50) {
        result = 'Excellent';
    }
   if (grade<3.00) {
       console.log(`Fail (${failResult})`);
       
   }else{
       console.log(`${result} (${grade.toFixed(2)})`);
       
   }
}
grades(4.33)