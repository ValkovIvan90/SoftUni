function walking(input) {
    let steps=input.shift();
    let sumOfSteps=0;
    let restSteps=0;

    while (steps!=="Going home") {
        let currentSteps=Number(steps);
        sumOfSteps+=currentSteps;
        if (sumOfSteps>=10000) {
            console.log("Goal reached! Good job!");
            break;
        }
        steps=input.shift()
    } 
    if (steps==="Going home") {
        let stepsToHome = Number(input.shift());
        sumOfSteps+=stepsToHome;
        if (sumOfSteps>=10000) {
            console.log("Goal reached! Good job!");
            
        }else{
             restSteps=Math.abs(sumOfSteps-10000)
            console.log(`${restSteps} more steps to reach goal.`);
            
        }
    }
  
}
walking([ '1500', '300', '2500', '3000', 'Going home', '200' ]);