function buildAWall(arr) {
    let result = [];
    let oneYard = 195;
    let pesos = 1900;

    while (arr.length !== 0) {

        
       
        if (arr.includes(30)) {
            while (arr.includes(30)) {
                let index = arr.indexOf(30);
                arr.splice(index, 1);
            }
           
            
        }else{
            result.push(oneYard * arr.length)
            arr = arr.map((x) => x + 1);
        }


    }
    let endSum = result.reduce((a, b) => a + b);
    console.log(result.join(', '));
   
    console.log(`${endSum * pesos} pesos`);



}
buildAWall([21, 25, 28])
buildAWall([17, 22, 17, 19, 17])
buildAWall([17])
