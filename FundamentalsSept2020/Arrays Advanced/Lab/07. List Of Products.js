function listOfProducts(arr) {
    let ordnerProducts=arr.sort()
     let num = 1;
    for (const product of ordnerProducts){
        
        console.log(`${num}.${product}`);
       num++; 
    }
  
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])