function foreignLanguages(input) {
    let languages='';
    if (input==='USA'||input==='England') {
        languages = 'English';
    }else if (input==='Spain'||input==='Mexico'||input==='Argentina') {
        languages = 'Spanish';
    }else{
        languages = 'unknown';
    }
    return languages;
}
console.log(foreignLanguages('Spa'));
