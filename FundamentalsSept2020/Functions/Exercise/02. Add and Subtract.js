function addAndSubtract(x, y, z) {

    function sum(a, b) {
        return a + b;
    }

    // let result = sum(x, y);
    // return result-z;

    // whit Arrow Function;
    //let sum = (a,b)=>a+b;
    
    return sum(x,y)-z;
}
console.log(addAndSubtract(42,58,10));


