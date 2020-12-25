function passwordValidator(password) {

    function validLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            validLength = true;

        } else {
            console.log("Password must be between 6 and 10 characters");

        }
        return validLength;
    }


    function validLettersAndDigits(pass) {
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt(0);
            if (char >= 48 && char <= 57 || char >= 65 && char <= 90 || char >= 97 && char <= 122) {
                validLettersAndDigits=true;

            } else {
                console.log('Password must consist only of letters and digits');
               validLettersAndDigits=false;
               break;
            }
        }
        return validLettersAndDigits;
    }

    function leastTwoDigist(pass) {
        let digits = 0;
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt(0);

            if (char >= 48 && char <= 57) {
                digits++;
            }
            if (digits >= 2) {
                leastTwoDigist = true;
                break;
            }
            if (i === pass.length - 1) {
                console.log('Password must have at least 2 digits');


            }

        }
        return leastTwoDigist;
    }
    let result = validLength(password);
    let secondResult=validLettersAndDigits(password);
    let trirdResult=leastTwoDigist(password);

    if (result===true&&secondResult===true&&trirdResult===true) {
        return'Password is valid';
        
    }

}
console.log(passwordValidator('MyPass123'));


