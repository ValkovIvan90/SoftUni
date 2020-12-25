function pascalCase(input) {
    let count=0;
    let text = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i].charCodeAt();
        if (char >= 65 && char <= 90) {
            count++;
            if (count>1) {
                text+=', '
                count=1;
            }
            text += String.fromCharCode(char);
        }
        else {
            text += String.fromCharCode(char);
        }


    }
    console.log(text);


}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')