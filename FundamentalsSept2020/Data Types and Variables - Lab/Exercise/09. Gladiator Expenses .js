function gladiator(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let money = 0;
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0 && i > 2 && i % 3 == 0 && i > 3) {
            brokenHelmet++;
            brokenSword++;
            brokenShield++;
            if (brokenShield == 2) {
                brokenArmor++;
            }
            continue;
        }
        if (i % 2 == 0) {
            brokenHelmet++;

        }
        if (i % 3 == 0) {
            brokenSword++;
        }
        
       


    }
    money =( brokenHelmet * helmetPrice) +( brokenSword * swordPrice) + (brokenShield * shieldPrice) 
    + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${money.toFixed(2)} aureus`);

}
gladiator(7,
    4,
    3,
    4,
    5)