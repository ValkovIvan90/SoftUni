function piccolo(arr) {
  let parkLot={};

  arr.forEach(el => {
      let[direction,number]=el.split(', ');
      if (direction==='IN') {
        parkLot[number]=direction;
      }else{
          delete parkLot[number];
      }
      
  });
 let sorted=Object.entries(parkLot);
 sorted.sort((a,b)=>a[0].localeCompare(b[0])).join('\n');
  
 sorted.length===0 ? console.log('Parking Lot is empty') :   sorted.forEach(a=>{
    console.log(a[0]);
    
});
 
 
 
  
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'])