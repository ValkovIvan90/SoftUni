function exctractFile(text) {
    let newText=text.substring(text.lastIndexOf('\\')+1)
    let fileName = newText.substring(0,newText.lastIndexOf('.'));
    let ext  = newText.substring(newText.lastIndexOf('.')+1);
    return[`File name: ${fileName}`,`File extension: ${ext}`].join('\n');
     
}
console.log(exctractFile('C:\\Internal\\training-internal\\Template.pptx'));

