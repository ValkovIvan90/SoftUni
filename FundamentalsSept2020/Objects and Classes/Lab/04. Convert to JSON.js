function convertToJSON(name,last,color) {
    let obj={};
    obj.name=name;
    obj.lastName=last;
    obj.hairColor=color;

    let json=JSON.stringify(obj);

    console.log(json);
    
    
}
convertToJSON('George',
'Jones',
'Brown')