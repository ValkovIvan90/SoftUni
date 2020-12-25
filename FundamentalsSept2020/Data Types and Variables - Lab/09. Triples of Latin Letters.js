function TriplesOflatin(input) {
    let firstNum='a'.charCodeAt(0)
   
    for (let i = 0; i <input; i++) {
        for (let j = 0; j <input; j++) {
           for (let k = 0; k <input; k++) {
               let result =String.fromCharCode(firstNum+i,firstNum+j,firstNum+k);
               
               console.log(result)
           }
        }
        
    }
}

TriplesOflatin(3)