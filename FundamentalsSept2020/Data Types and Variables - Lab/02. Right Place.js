function rightPlace(string,char,rightWord) {
    let word=string.replace('_',char);
    word===rightWord?console.log('Matched'):console.log('Not Matched');
    
    
    
}
rightPlace('Str_ng', 'i', 'String')