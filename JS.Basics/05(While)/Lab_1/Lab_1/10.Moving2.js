function solve(input) {
    let h = Number(input.shift());
    let w = Number(input.shift());
    let l = Number(input.shift());
 
    let totalSpace = h * w * l;
    let command =Number(input.shift())
    let box = 0;
    let total=0;
 
    while (command !== "Done") {
       box += Number(command);
       if (box > totalSpace) {
         total = Math.abs(totalSpace - box);
           console.log(`No more free space! You need ${total} Cubic meters more.`);
           break;
       }
      
       command = input.shift();
    }
    if (command==="Done") {
       if (box<totalSpace) {
          total=Math.abs(totalSpace-box);
          console.log(`${total} Cubic meters left.`);
          
       }
   } 
 }
 solve([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ]
  )
 