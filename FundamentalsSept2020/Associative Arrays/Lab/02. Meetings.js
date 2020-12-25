function meeting(arr) {
    let calender = {};

    for (const key of arr) {
        let [day, name] = key.split(' ');
        if (calender.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            
        }else{
           
            console.log(`Scheduled for ${day}`);
            calender[day]=name
        }
    }
     for (const key in calender) {
         console.log(`${key} -> ${calender[key]}`);
         
     }
    
}
meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])