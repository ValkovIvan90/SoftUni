function concatenateDate2(firstName,lastName,ageT,townT) {
    let name = firstName;
    let familie = lastName;
    let  age = Number(ageT);
    let town  =  townT;

    console.log(`You are ${name} ${familie}, a ${age}-years old person from ${town}.`);
    
}
concatenateDate2("Georgi","Georgiev","17","Pleven");