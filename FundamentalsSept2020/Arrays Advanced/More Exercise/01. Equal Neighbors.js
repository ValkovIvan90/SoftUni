function equalNeighbors(arr) {
    let find = 0;
    let newArr = [];
 
    let matrix = [];
    
    arr.forEach(element => {
        let newRow=element.toString().split(',').map(Number)
        newArr.push(newRow[0]);
          if (newArr.length===arr.length) {
              matrix.push(newArr);
          }

    });
    
     


}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);