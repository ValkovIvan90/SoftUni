function wordOcc(input) {
    let list= new Map();

    for (const key of input) {
        let count=1;
        if (list.has(key)) {
            let current=list.get(key)
            list.set(key,current+count)
        }else{
            list.set(key,count);
        }
        
        
    }
   let sorted=[...list];
   sorted.sort(sorting)
//        let first = a[1];
//        let second=b[1];
//        return second-first;
//    })
  for (let [name,count] of sorted) {
      console.log(`${name} -> ${count} times`);
      
  }
   
    function sorting(a,b) {
        let first=a[1];
        let second=b[1];
       return second-first

    }
}
wordOcc(["Here", "is", "the", "first", "sentence", "Here", "is", "another", 
"sentence", "And", "finally", "the", "third", "sentence"]);


/* Whit Object

function wordOcc(input) {
  let obj = {};

  for (const key of input) {
      let count=1;
      if (obj.hasOwnProperty(key)) {
          let current=obj[key]
          obj[key]=current+count
      }else{
         obj[key]=count;
      }
      
      
  }
 let sorted=Object.entries(obj);
 sorted.sort(sorting)
//        let first = a[1];
//        let second=b[1];
//        return second-first;
//    })
for (let [name,count] of sorted) {
    console.log(`${name} -> ${count} times`);
    
}
 
  function sorting(a,b) {
      let first=a[1];
      let second=b[1];
     return second-first

  }
}
wordOcc(["Here", "is", "the", "first", "sentence", "Here", "is", "another", 
"sentence", "And", "finally", "the", "third", "sentence"]);*/