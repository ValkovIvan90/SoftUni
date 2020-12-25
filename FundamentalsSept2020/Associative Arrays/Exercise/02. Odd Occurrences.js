function oddOccurrences(arr) {
    let obj = {}
    let lower = arr.toLowerCase().split(' ');
    
    lower.forEach(el => {
        if (obj.hasOwnProperty(el)) {
            obj[el]+=1;
        }
        else{
            obj[el]=1;
        }
       
    });
    let sorted =Object.entries(obj).sort((a,b)=>{
       
        return  b[1]-a[1];
    })
    let result=''
    sorted.forEach(el=>{
        if (el[1]%2===1) {
           result+=el[0]+' '
            
        }
    })
    console.log(result);
    
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')