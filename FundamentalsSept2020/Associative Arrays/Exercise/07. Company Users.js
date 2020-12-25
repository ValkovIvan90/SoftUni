function companyUser(arr) {
    let obj = {};

    for (const key of arr) {
       let[firma,id]=key.split(' -> ');
        if (!obj.hasOwnProperty(firma)) {
            obj[firma]=[id];

        }else{
            let oldId=obj[firma];
            if (!oldId.includes(id)) {
                oldId.push(id)
            }
        }
        
    }
    let sortedName=Object.entries(obj).sort((a,b)=>a[0].localeCompare(b[0]));
    for (let[name,employed] of sortedName) {
        console.log(name);
        employed.forEach(el => {
            console.log(`-- ${el}`);
            
        });
        
        
    }
    
}
companyUser([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345',
    'SoftUni -> AA1233215'
    ])