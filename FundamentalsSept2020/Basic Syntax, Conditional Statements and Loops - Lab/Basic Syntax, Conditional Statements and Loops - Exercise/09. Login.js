function login(input) {
    let userName = input.shift();
    let incorrect = 0;
    let password=userName.split('').reverse().join('');
    
    
    for (let i = 0; i < input.length; i++) {
        if (input[i]!==password) {
            console.log('Incorrect password. Try again.');
            incorrect++;
        }else{
            console.log(`User ${userName} logged in.`);
            break;
        }
        if (incorrect>=3) {
            console.log(`User ${userName} blocked!`);
            break;
        }

        
        
        
    }
}
login(['Acer','login','go','let me in','recA'])
