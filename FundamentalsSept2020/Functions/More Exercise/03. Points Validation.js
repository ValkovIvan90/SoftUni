function solve(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
  
    let firstPoint = checkFirstPoint(arr);
    let secondPoint = checkSecondPoint(arr);
    let thirdPoint = checkThirdPoint(arr);
  
    if (firstPoint === Math.trunc(firstPoint)) {
      console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  
    } else {
      console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondPoint === Math.trunc(secondPoint)) {
      console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  
    } else {
      console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  
    }
    if (thirdPoint === Math.trunc(thirdPoint)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  
    }
  
  
    function checkFirstPoint() {
      let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
      return checkOne;
    }
  
    function checkSecondPoint() {
      let checkTWo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
      return checkTWo;
    }
  
    function checkThirdPoint() {
      let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
      return checkThree;
    }
  }
  
  
  solve([2, 1, 1, 1])