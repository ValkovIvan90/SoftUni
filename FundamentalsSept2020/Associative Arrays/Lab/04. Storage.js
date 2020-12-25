function storage(arr) {
    let storage = new Map();

    for (const key of arr) {
        let [product, quantity] = key.split(' ');
        quantity = Number(quantity);
        if (storage.has(product)) {
            let currentPro = storage.get(product)
            let newQuantity = currentPro += quantity;
            storage.set(product, newQuantity)
        }else{
            storage.set(product, quantity)
        }
        
    }
   
   for (let[key,value] of storage) {       
    console.log(`${key} -> ${value}`);
      
    
   };


}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])