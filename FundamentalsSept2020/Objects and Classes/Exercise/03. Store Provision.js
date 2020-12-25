function storeProvision(firstArr, secondArr) {
  let obj={};

for (let i = 0; i < firstArr.length; i+=2) {
    let product=firstArr[i];
    let quantity=Number(firstArr[i+1]);
    obj[product]=quantity;
   
}
for (let j = 0; j < secondArr.length; j+=2) {
   let product=secondArr[j];
   let quantity=Number(secondArr[j+1]);
   if (obj[product]===undefined) {
      obj[product]=0;
   }
   obj[product]+=quantity;
   
}
for (const key in obj) {
  
   console.log(`${key} -> ${obj[key]}`);
}

    
  
}
storeProvision([
   'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
   [
      'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
   ]);



   // // Solve 2

   // function solve(currentStock, orderedProducts) {
   //    let shop = {};
   //    for (let i = 0; i < currentStock.length; i+=2) {
   //      const element = currentStock[i];
   //      shop[element]=Number(currentStock[i+1]);   
        
   //    }
   //    for (let i = 0; i < orderedProducts.length; i+=2) {
   //      const element = orderedProducts[i];
   //      if (!shop.hasOwnProperty(element)) {
   //        shop[element]=Number(orderedProducts[i+1]);
   //      }
   //      else{
   //        shop[element]+=Number(orderedProducts[i+1]); // Стойноста на елемента в Магазина се увеличава с номера от индекса!
   //      }
       
        
   //    }
   //    Object.keys(shop).forEach(key=>{
   //      console.log(`${key} -> ${shop[key]}`);
        
   //    });
      
    
   //  }
    
    
    
    
   //  solve([
   //    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
   //  ],
   //    [
   //      'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
   //    ]);